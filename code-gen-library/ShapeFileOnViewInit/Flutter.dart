//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart'
    show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart'
    show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart'
    show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart'
    show CodeGenHelper;
//end imports

//begin eventHandler
//Flutter: Action
void shapeFileOnViewInit() {
  final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
  final series = map.series![0] as IgfGeographicShapeSeriesState;
  final source = IgfShapeDataSourceState();
  series.shapefileDataSource = source;
  source.shapefileSource =
      'https://static.infragistics.com/xplatform/shapes/world_countries_all.shp';
  source.databaseSource =
      'https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf';
  map.backgroundContent = null;
}
//end eventHandler
