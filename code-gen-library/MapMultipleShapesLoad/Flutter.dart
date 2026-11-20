//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapMultipleShapesReaders.dart' show MapMultipleShapesReaders;
//end imports

class MapMultipleShapesLoad
{
//begin eventHandler
    /// Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
    /// asynchronously, so each source is given the method that turns its records into data when it
    /// arrives -- those methods belong to the supporting item this one requires.
    //Flutter: Action
    void mapMultipleShapesLoad() {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders")!;

        var sdsPolygons = IgfShapeDataSourceState();
        sdsPolygons.importCompleted = (IgfShapeDataSourceState s) => readers.readPolygons(s);
        sdsPolygons.shapefileSource = root + "WorldCountries.shp";
        sdsPolygons.databaseSource = root + "WorldCountries.dbf";

        var sdsPolylines = IgfShapeDataSourceState();
        sdsPolylines.importCompleted = (IgfShapeDataSourceState s) => readers.readPolylines(s);
        sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
        sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";

        var sdsLocations = IgfShapeDataSourceState();
        sdsLocations.importCompleted = (IgfShapeDataSourceState s) => readers.readPoints(s);
        sdsLocations.shapefileSource = root + "WorldCities.shp";
        sdsLocations.databaseSource = root + "WorldCities.dbf";
    }
//end eventHandler
}
