//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart' show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './ShapeStylingUtility.dart' show ShapeScaleStyling;
//end imports

class MapShapeScaleStyling
{
//begin eventHandler
    ShapeScaleStyling? shapeScaleStyling;

    // Scale styling: a color taken from a scale across a range of values.
    //Flutter: Action
    void mapShapeScaleStyling() {
        this.shapeScaleStyling = ShapeScaleStyling();
        this.shapeScaleStyling!.defaultFill = "Gray";
        this.shapeScaleStyling!.shapeStrokeColors = <String>["Black"];
        this.shapeScaleStyling!.shapeFillColors = <String>["DodgerBlue", "yellow", "#c2f542", "#e8c902", "#e8b602", "#e87902", "brown"];
        this.shapeScaleStyling!.itemMemberPath = "Population";
        this.shapeScaleStyling!.itemMinimumValue = 5000;
        this.shapeScaleStyling!.itemMaximumValue = 2000000000; // 2 Billions
        this.shapeScaleStyling!.isLogarithmic = true;
        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;

        // loading a shapefile with the geographic polygons of world countries
        var sds = IgfShapeDataSourceState();
        sds.importCompleted = (IgfShapeDataSourceState s) {
            var geoSeries = IgfGeographicShapeSeriesState();
            geoSeries.dataSource = s.getPointData();
            geoSeries.shapeMemberPath = "points";
            // the series asks for each shape's style as it draws it, which it only does when it is
            // allowed to take one
            geoSeries.isCustomShapeStyleAllowed = true;
            geoSeries.assigningShapeStyle = this.onStylingShape;
            map.series!.add(geoSeries);
        };
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp";
        sds.databaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf";
    }

    void onStylingShape(Object? sender, IgfAssigningShapeStyleEventArgsState args) {
        // the event covers a range of items rather than one, so the record is asked for by index
        var itemRecord = args.getItems!(args.startIndex, args.endIndex)![0];
        var shapeStyle = this.shapeScaleStyling!.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
//end eventHandler
}
