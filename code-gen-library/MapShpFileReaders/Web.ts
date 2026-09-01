//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

//begin supportingTypes
/**
 * What the shapefile becomes once it has loaded: records turned into routes, bound to the series that
 * draws them.
 *
 * A handler for the shape data source's importCompleted, and the source is created in code by the item
 * that requires this one — so there is nothing in a description to bind it to, and it is not an
 * initializer either.
 */
export class MapShpFileReaders {

    /** Each record is one cable route, with the fields the shapefile's database holds beside it. */
    public readRoutes(sds: IgcShapeDataSource, e: any, map: IgcGeographicMapComponent): void {
        var geoRoutes: any[] = [];
        var pointData = sds.getPointData();
        // parsing shapefile data and creating geo-locations
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            // using field/column names from .DBF file
            geoRoutes.push({
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM
            });
        }

        var lineSeries = map.series.item(0) as IgcGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoRoutes;
    }
}
//end supportingTypes
