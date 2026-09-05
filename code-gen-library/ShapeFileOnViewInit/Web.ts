//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ShapeFileOnViewInit {

    //begin eventHandler
    public shapeFileOnViewInit(): void {
        var geoMap = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var shapeSeries = geoMap.series.item(0) as IgcGeographicShapeSeriesComponent;

        var data = new IgcShapeDataSource();
        data.shapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp";
        data.databaseSource  = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf";

        shapeSeries.shapefileDataSource = data;

        // the shapes provide the geographic context, so the imagery underneath is not needed
        geoMap.backgroundContent = null;
    }
    //end eventHandler
}
