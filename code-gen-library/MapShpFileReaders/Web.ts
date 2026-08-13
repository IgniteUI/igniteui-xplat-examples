//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

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

    //begin readRoutes
    /** Each record is one cable route, with the fields the shapefile's database holds beside it. */
    public readRoutes(sds: IgcShapeDataSource, e: any): void {
        var geoRoutes: any[] = [];
        var pointData = sds.getPointData();
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            geoRoutes.push({
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CAPACITY,
                distance: record.fieldValues.DISTANCE
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var lineSeries = map.series.item(0) as IgcGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoRoutes;
    }
    //end readRoutes
}
//end supportingTypes
