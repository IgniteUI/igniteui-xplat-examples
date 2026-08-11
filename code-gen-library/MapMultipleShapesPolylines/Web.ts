//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapMultipleShapesPolylines {

    //begin eventHandler
    /** Connections between places, each record one path. */
    public mapMultipleShapesPolylines(sds: IgcShapeDataSource, e: any): void {
        var geoPolylines: any[] = [];
        var pointData = sds.getPointData();
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            geoPolylines.push({
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CAPACITY,
                distance: record.fieldValues.DISTANCE
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var lineSeries = map.series.item(1) as IgcGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoPolylines;
    }
    //end eventHandler
}
