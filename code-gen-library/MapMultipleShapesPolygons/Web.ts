//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapMultipleShapesPolygons {

    //begin eventHandler
    /** Country shapes, with the fields the tooltip shows taken from the .DBF file. */
    public mapMultipleShapesPolygons(sds: IgcShapeDataSource, e: any): void {
        var geoPolygons: any[] = [];
        var pointData = sds.getPointData();
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            geoPolygons.push({
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var shapeSeries = map.series.item(0) as IgcGeographicShapeSeriesComponent;
        shapeSeries.dataSource = geoPolygons;
    }
    //end eventHandler
}
