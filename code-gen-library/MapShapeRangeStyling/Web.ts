//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource, IgcShapefileRecord } from 'igniteui-webcomponents-core';
import { IgcStyleShapeEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the ShapeStylingUtility supporting item, which this item requires: in a generated
// sample those types are written beside the component, so there is no import of them there.
import { ShapeRangeStyling } from '../ShapeStylingUtility/Web';

export class MapShapeRangeStyling {

    //begin eventHandler
    public shapeRangeStyling: ShapeRangeStyling;

    // Range styling: a color per band of values.
    public mapShapeRangeStyling(): void {
        this.shapeRangeStyling = new ShapeRangeStyling();
        this.shapeRangeStyling.defaultFill = 'Gray';
        this.shapeRangeStyling.itemMemberPath = 'Population';
        this.shapeRangeStyling.ranges = [
            { fill: 'yellow', minimum: 5000, maximum: 10000000, },        // 5 K - 10 M
            { fill: 'orange', minimum: 10000000, maximum: 100000000, },   // 10 M - 100 M
            { fill: 'red',    minimum: 100000000, maximum: 500000000, },  // 100 M - 500 M
            { fill: 'brown',  minimum: 500000000, maximum: 2000000000, }, // 500 M - 2 B
        ];

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");

        // loading a shapefile with the geographic polygons of world countries
        var sds = new IgcShapeDataSource();
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp";
        sds.databaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf";
        sds.importCompleted = (s: IgcShapeDataSource, e: any) => {
            var geoSeries = new IgcGeographicShapeSeriesComponent();
            geoSeries.dataSource = s.getPointData();
            geoSeries.shapeMemberPath = "points";
            // the series asks for each shape's style as it draws it
            geoSeries.styleShape = this.onStylingShape.bind(this);
            map.series.add(geoSeries);
        };
        sds.dataBind();
    }

    public onStylingShape(s: IgcGeographicShapeSeriesComponent, args: IgcStyleShapeEventArgs): void {
        var itemRecord = args.item as IgcShapefileRecord;
        var shapeStyle = this.shapeRangeStyling.generate(itemRecord);
        args.shapeOpacity = shapeStyle.opacity;
        args.shapeFill = shapeStyle.fill;
        args.shapeStroke = shapeStyle.stroke;
        args.shapeStrokeThickness = shapeStyle.strokeThickness;
    }
    //end eventHandler
}
