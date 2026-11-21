//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/igf-shape-data-source.dart' show IgfShapeDataSourceState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-shape-series.dart' show IgfGeographicShapeSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './ShapeStylingUtility.dart' show ShapeRangeStyling, ShapeRange;
//end imports

class MapShapeRangeStyling
{
//begin eventHandler
    ShapeRangeStyling? shapeRangeStyling;

    // Range styling: a color per band of values.
    //Flutter: Action
    void mapShapeRangeStyling() {
        this.shapeRangeStyling = ShapeRangeStyling();
        this.shapeRangeStyling!.defaultFill = "Gray";
        this.shapeRangeStyling!.itemMemberPath = "Population";
        this.shapeRangeStyling!.ranges = <ShapeRange>[
            ShapeRange(5000, 10000000, "yellow"),         // 5 K - 10 M
            ShapeRange(10000000, 100000000, "orange"),    // 10 M - 100 M
            ShapeRange(100000000, 500000000, "red"),      // 100 M - 500 M
            ShapeRange(500000000, 2000000000, "brown")    // 500 M - 2 B
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
        var shapeStyle = this.shapeRangeStyling!.generate(itemRecord);
        args.opacity = shapeStyle.opacity;
        args.fill = shapeStyle.fill;
        args.stroke = shapeStyle.stroke;
        args.strokeThickness = shapeStyle.strokeThickness;
    }
//end eventHandler
}
