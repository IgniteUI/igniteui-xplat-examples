//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
//begin testing
import 'package:igniteui_flutter_core/src/GlobalQueuedWorkState.dart' show GlobalQueuedWorkState;
//end testing
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapMultipleShapesReaders.dart' show MapMultipleShapesReaders;
//end imports

class MapBindingShpPointsLoad
{
//begin eventHandler
    /// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
    /// its records into data when they arrive -- a method of the supporting item this one requires.
    //Flutter: Action
    void mapBindingShpPointsLoad() {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders")!;

        var sds = IgfShapeDataSourceState();
        //begin testing
        final work = GlobalQueuedWorkState.instance!;
        const channel = 'Sample.MapBindingShpPointsLoad.Import';
        work.notifyWorkQueued(channel);
        //end testing
        sds.importCompleted = (IgfShapeDataSourceState s) {
            //begin testing
            try { readers.readPoints(s); }
            //end testing
            //begin notTesting
            readers.readPoints(s);
            //end notTesting
            //begin testing
            finally { work.notifyWorkCompleted(channel); }
            //end testing
        };
        sds.shapefileSource = root + "WorldCities.shp";
        sds.databaseSource = root + "WorldCities.dbf";
    }
//end eventHandler
}
