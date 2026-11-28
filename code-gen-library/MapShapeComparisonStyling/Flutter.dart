//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart' show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './ShapeStylingUtility.dart' show ShapeComparisonStyling, ShapeComparison;
//end imports

class MapShapeComparisonStyling
{
//begin eventHandler
    ShapeComparisonStyling? shapeComparisonStyling;

    // Comparison styling: a color per named value.
    //Flutter: Action
    void mapShapeComparisonStyling() {
        this.shapeComparisonStyling = ShapeComparisonStyling();
        this.shapeComparisonStyling!.defaultFill = "Gray";
        this.shapeComparisonStyling!.itemMemberPath = "Region";
        this.shapeComparisonStyling!.itemMappings = <ShapeComparison>[
            ShapeComparison("Eastern Europe", "Red"),
            ShapeComparison("Central Asia", "Red"),
            ShapeComparison("Eastern Asia", "Red"),
            ShapeComparison("Southern Asia", "Orange"),
            ShapeComparison("Middle East", "Orange"),
            ShapeComparison("Northern Africa", "Orange"),
            ShapeComparison("Eastern Africa", "Yellow"),
            ShapeComparison("Western Africa", "Yellow"),
            ShapeComparison("Middle Africa", "Yellow"),
            ShapeComparison("Southern Africa", "Yellow"),
            ShapeComparison("Central America", "DodgerBlue"),
            ShapeComparison("Northern America", "DodgerBlue"),
            ShapeComparison("Western Europe", "DodgerBlue"),
            ShapeComparison("Southern Europe", "DodgerBlue"),
            ShapeComparison("Northern Europe", "DodgerBlue"),
            ShapeComparison("South America", "#22c928"),
            ShapeComparison("Melanesia", "#b64fff"),
            ShapeComparison("Micronesia", "#b64fff"),
            ShapeComparison("Polynesia", "#b64fff"),
            ShapeComparison("Australia", "#b64fff")
        ];
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
        var shapeStyle = this.shapeComparisonStyling!.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
//end eventHandler
}
