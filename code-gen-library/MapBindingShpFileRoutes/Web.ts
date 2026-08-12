//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapBindingShpFileRoutes {

    //begin eventHandler
    /** Each record is one cable route, with the fields the shapefile's database holds beside it. */
    public mapBindingShpFileRoutes(sds: IgcShapeDataSource, e: any): void {
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
    //end eventHandler
}
