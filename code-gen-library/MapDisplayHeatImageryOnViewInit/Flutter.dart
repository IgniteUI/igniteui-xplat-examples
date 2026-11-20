//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/Color.dart' show Color;
import 'package:igniteui_flutter_core/src/DownloadingMultiScaleImageEventHandler.dart' show DownloadingMultiScaleImageEventHandler;
import 'package:igniteui_flutter_core/src/GlobalQueuedWorkState.dart' show GlobalQueuedWorkState;
import 'package:igniteui_flutter_core/src/HeatTileGenerator.dart' show HeatTileGenerator;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_core/src/type.dart' show Delegate, EventArgs, EventHandler$1;
import 'package:igniteui_flutter_maps/src/GeographicTileSeries.dart' show GeographicTileSeries;
import 'package:igniteui_flutter_maps/src/TileGeneratorMapImagery.dart' show TileGeneratorMapImagery;
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
        final work = GlobalQueuedWorkState.instance!;
        const channel = 'Sample.MapDisplayHeatImageryOnViewInit';
        work.notifyWorkQueued(channel);
        source.importCompleted = (IgfShapeDataSourceState loaded) {
            try {
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
                final generator = HeatTileGenerator()
                    ..xValues = ArrayList<double>(longitudes)
                    ..yValues = ArrayList<double>(latitudes)
                    ..values = ArrayList<double>(populations)
                    ..blurRadius = 6
                    ..maxBlurRadius = 20
                    ..useBlurRadiusAdjustedForZoom = true
                    ..minimumColor = Color.fromArgb(128, 100, 255, 0)
                    ..maximumColor = Color.fromArgb(128, 255, 255, 0)
                    ..useGlobalMinMax = true
                    ..useGlobalMinMaxAdjustedForZoom = true
                    ..useLogarithmicScale = true
                    ..scaleColors = ArrayList<Color>([
                        Color.fromArgb(64, 0, 0, 255),
                        Color.fromArgb(96, 0, 255, 255),
                        Color.fromArgb(68, 50, 205, 50),
                        Color.fromArgb(180, 255, 255, 0),
                        Color.fromArgb(200, 255, 0, 0)
                    ]);
                final imagery = TileGeneratorMapImagery()..tileGenerator = generator;
                var requestedTiles = false;
                imagery.downloadingImage = Delegate.delegateCombine(imagery.downloadingImage,
                    DownloadingMultiScaleImageEventHandler((sender, args) {
                        requestedTiles = true;
                    }));
                final series = map.i_IgfGeographicMap.series![0] as GeographicTileSeries;
                var completed = false;
                series.imageTilesReady = EventHandler$1<EventArgs?>((sender, args) {
                    // An empty imagery layer can report ready before its first request.
                    if (requestedTiles && !completed) {
                        completed = true;
                        work.notifyWorkCompleted(channel);
                    }
                });
                series.tileImagery = imagery;
            } catch (_) {
                work.notifyWorkCompleted(channel);
                rethrow;
            }
        };
        const root = 'https://static.infragistics.com/xplatform/shapes/';
        source.shapefileSource = root + 'AmericanCities.shp';
        source.databaseSource = root + 'AmericanCities.dbf';
    }
    //end eventHandler
}
