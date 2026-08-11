//begin imports
import { IgcGeographicMapComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapMultipleShapesPoints {

    //begin eventHandler
    /** Capital cities only, one point per record. */
    public mapMultipleShapesPoints(sds: IgcShapeDataSource, e: any): void {
        var geoLocations: any[] = [];
        var pointData = sds.getPointData();
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            if (record.fieldValues.CAPITAL === "N") continue;
            // each of these records holds a single point
            geoLocations.push({
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: record.fieldValues.POPULATION
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var symbolSeries = map.series.item(2) as IgcGeographicSymbolSeriesComponent;
        symbolSeries.dataSource = geoLocations;
    }
    //end eventHandler
}
