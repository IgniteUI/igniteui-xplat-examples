//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent, IgcGeographicShapeSeriesBaseComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource, IgcShapefileRecord } from 'igniteui-webcomponents-core';
import { IgcAssigningShapeStyleEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the ShapeStylingUtility supporting item, which this item requires: in a generated
// sample those types are written beside the component, so there is no import of them there.
import { ShapeRandomStyling } from '../ShapeStylingUtility/Web';

export class MapShapeRandomStyling {

    //begin eventHandler
    public shapeRandomStyling: ShapeRandomStyling;

    // Random styling: each country keeps the color it is first given.
    public mapShapeRandomStyling(): void {
        this.shapeRandomStyling = new ShapeRandomStyling();
        this.shapeRandomStyling.shapeStrokeColors = ['Black'];
        this.shapeRandomStyling.shapeFillColors = ['#8C23D1', '#0E9759', '#B4D336', '#F2A464', '#D74545', 'DodgerBlue'];

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");

        // loading a shapefile with the geographic polygons of world countries
        var sds = new IgcShapeDataSource();
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp";
        sds.databaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf";
        sds.importCompleted = (s: IgcShapeDataSource, e: any) => {
            var geoSeries = new IgcGeographicShapeSeriesComponent();
            geoSeries.dataSource = s.getPointData();
            geoSeries.shapeMemberPath = "points";
            // the series asks for each shape's style as it draws it, which it only does when it is
            // allowed to take one
            geoSeries.isCustomShapeStyleAllowed = true;
            geoSeries.assigningShapeStyle = this.onStylingShape.bind(this);
            map.series.add(geoSeries);
        };
        sds.dataBind();
    }

    public onStylingShape(s: IgcGeographicShapeSeriesBaseComponent, args: IgcAssigningShapeStyleEventArgs): void {
        // the event covers a range of items rather than one, so the record is asked for by index
        var itemRecord = args.getItems(args.startIndex, args.endIndex)[0] as IgcShapefileRecord;
        var shapeStyle = this.shapeRandomStyling.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
    //end eventHandler
}
