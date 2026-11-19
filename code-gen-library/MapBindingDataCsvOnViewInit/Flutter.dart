//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapDensityCsvData.dart' show MapDensityCsvData;
//end imports

class MapBindingDataCsvOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void mapBindingDataCsvOnViewInit() {
        final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
        final loader = CodeGenHelper.getSharedSupporting<MapDensityCsvData>('MapDensityCsvData')!;
        loader.load(map, 'https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv',
            latitudeColumn: 1, longitudeColumn: 2, populationColumn: 3,
            geographicBounds: ui.Rect.fromLTWH(-130, 15, 65, 35),
            workChannel: 'Sample.MapBindingDataCsvOnViewInit.Load');
    }
    //end eventHandler
}
