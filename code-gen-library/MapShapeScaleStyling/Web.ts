//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource, IgcShapefileRecord } from 'igniteui-webcomponents-core';
import { IgcStyleShapeEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the ShapeStylingUtility supporting item, which this item requires: in a generated
// sample those types are written beside the component, so there is no import of them there.
import { ShapeScaleStyling } from '../ShapeStylingUtility/Web';

export class MapShapeScaleStyling {

    //begin eventHandler
    public shapeScaleStyling: ShapeScaleStyling;

    // Scale styling: a color taken from a scale across a range of values.
    public mapShapeScaleStyling(): void {
        this.shapeScaleStyling = new ShapeScaleStyling();
        this.shapeScaleStyling.defaultFill = 'Gray';
        this.shapeScaleStyling.shapeStrokeColors = ['Black'];
        this.shapeScaleStyling.shapeFillColors = ['DodgerBlue', 'yellow', '#c2f542', '#e8c902', '#e8b602', '#e87902', 'brown'];
        this.shapeScaleStyling.itemMemberPath = 'Population';
        this.shapeScaleStyling.itemMinimumValue = 5000;
        this.shapeScaleStyling.itemMaximumValue = 2000000000; // 2 Billions
        this.shapeScaleStyling.isLogarithmic = true;

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
        var shapeStyle = this.shapeScaleStyling.generate(itemRecord);
        args.shapeOpacity = shapeStyle.opacity;
        args.shapeFill = shapeStyle.fill;
        args.shapeStroke = shapeStyle.stroke;
        args.shapeStrokeThickness = shapeStyle.strokeThickness;
    }
    //end eventHandler
}
