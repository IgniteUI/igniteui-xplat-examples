//begin imports
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-polyline-series.dart' show IgfGeographicPolylineSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

//begin supportingTypes
/// What the shapefile becomes once it has loaded: records turned into routes, bound to the series
/// that draws them.
///
/// A handler for the shape data source's importCompleted, and the source is created in code by the
/// item that requires this one -- so there is nothing in a description to bind it to, and it is not
/// an initializer either.
class MapShpFileReaders
{
    /// Each record is one cable route, with the fields the database holds beside it.
    void readRoutes(IgfShapeDataSourceState sds) {
        var geoRoutes = <Map<String, Object?>>[];
        // parsing shapefile data and creating geo-locations
        for (var record in sds.getPointData()) {
            var fields = record.fieldValues;
            // using field/column names from .DBF file
            geoRoutes.add(<String, Object?>{
                "points": record.points,
                "name": fields["Name"],
                "capacity": fields["CapacityG"],
                "distance": fields["DistanceKM"]
            });
        }

        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var lineSeries = map.series![0] as IgfGeographicPolylineSeriesState;
        lineSeries.dataSource = geoRoutes;
    }
}
//end supportingTypes
