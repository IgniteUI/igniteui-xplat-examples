//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapDensityCsvData.dart' show MapDensityCsvData;
//end imports

class MapTypeScatterDensitySeriesOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void mapTypeScatterDensitySeriesOnViewInit() {
        final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
        final loader = CodeGenHelper.getSharedSupporting<MapDensityCsvData>('MapDensityCsvData')!;
        loader.load(map, 'https://static.infragistics.com/xplatform/data/AusPlaces.csv',
            latitudeColumn: 2, longitudeColumn: 1,
            geographicBounds: ui.Rect.fromLTWH(110, -45, 45, 35),
            workChannel: 'Sample.MapTypeScatterDensitySeriesOnViewInit.Load');
    }
    //end eventHandler
}
