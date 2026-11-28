//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-polyline-series.dart' show IgfGeographicPolylineSeriesState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart' show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_maps/src/igf-geographic-symbol-series.dart' show IgfGeographicSymbolSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

//begin supportingTypes
/// What each of the three shapefiles becomes once it has loaded: records turned into data, bound to
/// the series that draws them.
///
/// These are handlers for a shape data source's importCompleted, and the source is created in code by
/// the item that requires this one -- so there is nothing in a description to bind them to, and they
/// are not initializers either. A supporting item is what they are: a type asked for by name, whose
/// methods the loader wires up.
class MapMultipleShapesReaders
{
    //begin readPolygons
    /// Country shapes, with the fields the tooltip shows taken from the .DBF file.
    void readPolygons(IgfShapeDataSourceState sds) {
        var geoPolygons = <Map<String, Object?>>[];
        // parsing shapefile data and creating geo-polygons
        for (var record in sds.getPointData()) {
            var fields = record.fieldValues;
            // using field/column names from .DBF file
            geoPolygons.add(<String, Object?>{
                "points": record.points,
                "name": fields["NAME"],
                "gdp": fields["GDP"],
                "population": fields["POPULATION"]
            });
        }

        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var polygonSeries = map.series![0] as IgfGeographicShapeSeriesState;
        polygonSeries.dataSource = geoPolygons;
    }
    //end readPolygons

    //begin readPolylines
    /// Connections between places, each record one path.
    void readPolylines(IgfShapeDataSourceState sds) {
        var geoPolylines = <Map<String, Object?>>[];
        // parsing shapefile data and creating geo-polylines
        for (var record in sds.getPointData()) {
            var fields = record.fieldValues;
            // using field/column names from .DBF file
            geoPolylines.add(<String, Object?>{
                "points": record.points,
                "name": fields["Name"],
                "capacity": fields["CapacityG"],
                "distance": fields["DistanceKM"],
                // a route whose in-service year is blank has no InService field at all
                "service": fields["InService"]
            });
        }

        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var lineSeries = map.series![1] as IgfGeographicPolylineSeriesState;
        lineSeries.dataSource = geoPolylines;
    }
    //end readPolylines

    //begin readPoints
    /// Cities with a known population, one point per record.
    void readPoints(IgfShapeDataSourceState sds) {
        var geoLocations = <Map<String, Object?>>[];
        // parsing shapefile data and creating geo-locations
        for (var record in sds.getPointData()) {
            var fields = record.fieldValues;
            var pop = (fields["POPULATION"] as num).toDouble();
            if (pop > 0) {
                // each of these records holds a single point
                var point = record.points![0]![0]!;
                // using field/column names from .DBF file
                geoLocations.add(<String, Object?>{
                    "latitude": point.y,
                    "longitude": point.x,
                    "city": fields["NAME"],
                    "population": pop
                });
            }
        }

        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        for (var i = 0; i < map.series!.count; i++) {
            final symbolSeries = map.series![i];
            if (symbolSeries is IgfGeographicSymbolSeriesState && symbolSeries.name == "symbolSeries") {
                symbolSeries.dataSource = geoLocations;
                return;
            }
        }
        throw StateError("No geographic symbol series named symbolSeries.");
    }
    //end readPoints
}
//end supportingTypes
