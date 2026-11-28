//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/Color.dart' show Color;
//begin testing
import 'package:igniteui_flutter_core/src/DownloadingMultiScaleImageEventHandler.dart' show DownloadingMultiScaleImageEventHandler;
import 'package:igniteui_flutter_core/src/GlobalQueuedWorkState.dart' show GlobalQueuedWorkState;
//end testing
import 'package:igniteui_flutter_core/src/igf-heat-tile-generator.dart' show IgfHeatTileGeneratorState;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
//begin testing
import 'package:igniteui_flutter_core/src/type.dart' show Delegate, EventArgs, EventHandler$1;
//end testing
import 'package:igniteui_flutter_maps/src/igf-geographic-tile-series.dart' show IgfGeographicTileSeriesState;
import 'package:igniteui_flutter_maps/src/igf-tile-generator-map-imagery.dart' show IgfTileGeneratorMapImageryState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class MapDisplayHeatImageryOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void mapDisplayHeatImageryOnViewInit() {
        final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
        map.zoomToGeographic(const ui.Rect.fromLTWH(-134.5, 16, 70, 37));
        final source = IgfShapeDataSourceState();
        //begin testing
        final work = GlobalQueuedWorkState.instance!;
        const channel = 'Sample.MapDisplayHeatImageryOnViewInit';
        work.notifyWorkQueued(channel);
        //end testing
        source.importCompleted = (IgfShapeDataSourceState loaded) {
            //begin testing
            try {
            //end testing
                final latitudes = <double>[];
                final longitudes = <double>[];
                final populations = <double>[];
                for (final record in loaded.getPointData()) {
                    final population = (record.fieldValues['POP2010'] as num).toDouble();
                    final parts = record.points!;
                    for (var j = 0; j < parts.count; j++) {
                        final part = parts[j]!;
                        for (var k = 0; k < part.count; k++) {
                            final point = part[k]!;
                            latitudes.add(point.y);
                            longitudes.add(point.x);
                            populations.add(population >= 0 ? population : 0);
                        }
                    }
                }
                final generator = IgfHeatTileGeneratorState()
                    ..xValues = longitudes
                    ..yValues = latitudes
                    ..values = populations
                    ..blurRadius = 6
                    ..maxBlurRadius = 20
                    ..useBlurRadiusAdjustedForZoom = true
                    ..minimumColor = const ui.Color.fromARGB(128, 100, 255, 0)
                    ..maximumColor = const ui.Color.fromARGB(128, 255, 255, 0)
                    ..useGlobalMinMax = true
                    ..useGlobalMinMaxAdjustedForZoom = true
                    ..useLogarithmicScale = true
                    ..scaleColors = [
                        Color.fromArgb(64, 0, 0, 255),
                        Color.fromArgb(96, 0, 255, 255),
                        Color.fromArgb(68, 50, 205, 50),
                        Color.fromArgb(180, 255, 255, 0),
                        Color.fromArgb(200, 255, 0, 0)
                    ];
                final imagery = IgfTileGeneratorMapImageryState()
                    ..tileGenerator = generator.i_IgfHeatTileGenerator;
                //begin testing
                var requestedTiles = false;
                final nativeImagery = imagery.i_IgfTileGeneratorMapImagery;
                nativeImagery.downloadingImage = Delegate.delegateCombine(nativeImagery.downloadingImage,
                    DownloadingMultiScaleImageEventHandler((sender, args) {
                        requestedTiles = true;
                    }));
                //end testing
                final series = map.series![0] as IgfGeographicTileSeriesState;
                //begin testing
                var completed = false;
                series.i_IgfGeographicTileSeries.imageTilesReady = EventHandler$1<EventArgs?>((sender, args) {
                    // An empty imagery layer can report ready before its first request.
                    if (requestedTiles && !completed) {
                        completed = true;
                        work.notifyWorkCompleted(channel);
                    }
                });
                //end testing
                series.tileImagery = imagery;
            //begin testing
            } catch (_) {
                work.notifyWorkCompleted(channel);
                rethrow;
            }
            //end testing
        };
        const root = 'https://static.infragistics.com/xplatform/shapes/';
        source.shapefileSource = root + 'AmericanCities.shp';
        source.databaseSource = root + 'AmericanCities.dbf';
    }
    //end eventHandler
}
