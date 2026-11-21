//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart' show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './ShapeStylingUtility.dart' show ShapeRandomStyling;
//end imports

class MapShapeRandomStyling
{
//begin eventHandler
    ShapeRandomStyling? shapeRandomStyling;

    // Random styling: each country keeps the color it is first given.
    //Flutter: Action
    void mapShapeRandomStyling() {
        this.shapeRandomStyling = ShapeRandomStyling();
        this.shapeRandomStyling!.shapeStrokeColors = <String>["Black"];
        this.shapeRandomStyling!.shapeFillColors = <String>["#8C23D1", "#0E9759", "#B4D336", "#F2A464", "#D74545", "DodgerBlue"];
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
        var shapeStyle = this.shapeRandomStyling!.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
//end eventHandler
}
