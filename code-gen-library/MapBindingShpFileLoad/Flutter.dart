//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapShpFileReaders.dart' show MapShpFileReaders;
//end imports

class MapBindingShpFileLoad
{
//begin eventHandler
    /// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
    /// its records into data when they arrive -- a method of the supporting item this one requires.
    //Flutter: Action
    void mapBindingShpFileLoad() {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapShpFileReaders>("MapShpFileReaders")!;

        var sds = IgfShapeDataSourceState();
        sds.importCompleted = (IgfShapeDataSourceState s) => readers.readRoutes(s);
        sds.shapefileSource = root + "WorldCableRoutes.shp";
        sds.databaseSource = root + "WorldCableRoutes.dbf";
    }
//end eventHandler
}
