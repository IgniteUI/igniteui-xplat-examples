//begin imports
import 'dart:convert';
import 'dart:io';
import 'package:igniteui_flutter_charts/src/MarkerType.dart' show MarkerType;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-symbol-series.dart' show IgfGeographicSymbolSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_core/src/GlobalQueuedWorkState.dart' show GlobalQueuedWorkState;
//end imports

class MapBindingDataJsonPointsOnViewInit
{
//begin eventHandler
    //Flutter: Action
    void mapBindingDataJsonPointsOnViewInit() {
        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        // HttpClient out of dart:io rather than a package: the emitted library depends on the
        // product packages and intl, and nothing else.
        final work = GlobalQueuedWorkState.instance!;
        const channel = 'Sample.MapBindingDataJsonPointsOnViewInit.Load';
        work.notifyWorkQueued(channel);
        _fetch(url).then((text) {
            var data = jsonDecode(text) as List<dynamic>;
            var geoLocations = <Map<String, Object?>>[];
            // parsing JSON data and using only cities that are capitals
            for (var entry in data) {
                var item = entry as Map<String, dynamic>;
                if (item["cap"] != true) continue;
                // the series binds to member names, so each item is projected onto them --
                // the shape the other platforms give a type of its own
                geoLocations.add(<String, Object?>{
                    "latitude": (item["lat"] as num).toDouble(),
                    "longitude": (item["lon"] as num).toDouble(),
                    "population": (item["pop"] as num).toDouble(),
                    "city": item["name"] as String?,
                    "country": item["country"] as String?
                });
            }
            var series = IgfGeographicSymbolSeriesState();
            series.dataSource = geoLocations;
            series.latitudeMemberPath = "latitude";
            series.longitudeMemberPath = "longitude";
            series.markerBrush = IgfSolidColorBrush.fromString("rgba(255, 255, 255, 1.0)");
            series.markerOutline = IgfSolidColorBrush.fromString("rgba(135, 5, 255, 1.0)");
            series.markerThickness = 1;
            series.markerType = MarkerType.circle;
            map.series!.add(series);
        }).whenComplete(() => work.notifyWorkCompleted(channel));
    }

    static Future<String> _fetch(String url) async {
        var client = HttpClient();
        try {
            var request = await client.getUrl(Uri.parse(url));
            var response = await request.close();
            if (response.statusCode != HttpStatus.ok) {
                throw HttpException('WorldCities download failed with status ${response.statusCode}', uri: Uri.parse(url));
            }
            return await response.transform(utf8.decoder).join();
        } finally {
            client.close();
        }
    }
//end eventHandler
}
