//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent, IgcGeographicShapeSeriesBaseComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource, IgcShapefileRecord } from 'igniteui-webcomponents-core';
import { IgcAssigningShapeStyleEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the ShapeStylingUtility supporting item, which this item requires: in a generated
// sample those types are written beside the component, so there is no import of them there.
import { ShapeComparisonStyling } from '../ShapeStylingUtility/Web';

export class MapShapeComparisonStyling {

    //begin eventHandler
    public shapeComparisonStyling: ShapeComparisonStyling;

    // Comparison styling: a color per named value.
    public mapShapeComparisonStyling(): void {
        this.shapeComparisonStyling = new ShapeComparisonStyling();
        this.shapeComparisonStyling.defaultFill = 'Gray';
        this.shapeComparisonStyling.itemMemberPath = 'Region';
        this.shapeComparisonStyling.itemMappings = [
            { fill: 'Red', itemValue: 'Eastern Europe' },
            { fill: 'Red', itemValue: 'Central Asia' },
            { fill: 'Red', itemValue: 'Eastern Asia' },
            { fill: 'Orange', itemValue: 'Southern Asia' },
            { fill: 'Orange', itemValue: 'Middle East' },
            { fill: 'Orange', itemValue: 'Northern Africa' },
            { fill: 'Yellow', itemValue: 'Eastern Africa' },
            { fill: 'Yellow', itemValue: 'Western Africa' },
            { fill: 'Yellow', itemValue: 'Middle Africa' },
            { fill: 'Yellow', itemValue: 'Southern Africa' },
            { fill: 'DodgerBlue', itemValue: 'Central America' },
            { fill: 'DodgerBlue', itemValue: 'Northern America' },
            { fill: 'DodgerBlue', itemValue: 'Western Europe' },
            { fill: 'DodgerBlue', itemValue: 'Southern Europe' },
            { fill: 'DodgerBlue', itemValue: 'Northern Europe' },
            { fill: '#22c928', itemValue: 'South America' },
            { fill: '#b64fff', itemValue: 'Melanesia' },
            { fill: '#b64fff', itemValue: 'Micronesia' },
            { fill: '#b64fff', itemValue: 'Polynesia' },
            { fill: '#b64fff', itemValue: 'Australia' },
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
        var shapeStyle = this.shapeComparisonStyling.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
    //end eventHandler
}
