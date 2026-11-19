//begin imports
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/GlobalQueuedWorkState.dart' show GlobalQueuedWorkState;
import 'package:igniteui_flutter_core/src/type.dart' show EventHandler$1, Delegate;
import 'package:igniteui_flutter_charts/src/ProgressiveLoadStatusEventArgs.dart' show ProgressiveLoadStatusEventArgs;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-high-density-scatter-series.dart' show IgfGeographicHighDensityScatterSeriesState;
//end imports

//begin supportingTypes
class MapDensityCsvData {
    Future<void> load(IgfGeographicMapState map, String url, {
        required int latitudeColumn,
        required int longitudeColumn,
        int? populationColumn,
        required ui.Rect geographicBounds,
        required String workChannel,
    }) async {
        final work = GlobalQueuedWorkState.instance!;
        work.notifyWorkQueued(workChannel);
        final client = HttpClient();
        try {
            final uri = Uri.parse(url);
            final request = await client.getUrl(uri);
            final response = await request.close();
            if (response.statusCode < 200 || response.statusCode >= 300) {
                throw HttpException('CSV request failed: ${response.statusCode}', uri: uri);
            }
            // AusPlaces contains malformed UTF-8 placename bytes. Match .NET's
            // replacement decoding; numeric coordinate columns remain ASCII.
            final csv = await response.transform(const Utf8Decoder(allowMalformed: true)).join();
            final lines = const LineSplitter().convert(csv);
            final locations = <Map<String, Object?>>[];
            final lastColumn = populationColumn ??
                (latitudeColumn > longitudeColumn ? latitudeColumn : longitudeColumn);
            for (final line in lines.skip(1)) {
                final columns = line.split(',');
                if (columns.length <= lastColumn) continue;
                locations.add(<String, Object?>{
                    'name': columns[0],
                    'latitude': double.parse(columns[latitudeColumn]),
                    'longitude': double.parse(columns[longitudeColumn]),
                    if (populationColumn != null)
                        'population': double.parse(columns[populationColumn]),
                });
            }
            if (locations.isEmpty) throw StateError('The CSV contained no geographic locations.');

            final series = IgfGeographicHighDensityScatterSeriesState();
            series.name = 'hdSeries';
            series.dataSource = locations;
            series.latitudeMemberPath = 'latitude';
            series.longitudeMemberPath = 'longitude';
            series.heatMinimumColor = const ui.Color(0xFF000000);
            series.heatMaximumColor = const ui.Color(0xFFFF0000);
            series.heatMinimum = 0;
            series.heatMaximum = 5;
            series.pointExtent = 1;
            series.mouseOverEnabled = true;
            final rendered = Completer<void>();
            final model = series.i_IgfGeographicHighDensityScatterSeries;
            final onProgress = EventHandler$1<ProgressiveLoadStatusEventArgs?>((sender, args) {
                if (args?.currentStatus == 100 && !rendered.isCompleted) rendered.complete();
            });
            model.progressiveLoadStatusChanged = Delegate.delegateCombine(
                model.progressiveLoadStatusChanged, onProgress);
            try {
                map.series!.add(series);
                map.zoomToGeographic(geographicBounds);
                await rendered.future;
            } finally {
                model.progressiveLoadStatusChanged = Delegate.delegateRemove(
                    model.progressiveLoadStatusChanged, onProgress);
            }
        } finally {
            client.close(force: true);
            work.notifyWorkCompleted(workChannel);
        }
    }
}
//end supportingTypes
