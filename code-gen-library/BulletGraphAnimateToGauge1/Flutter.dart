//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_gauges/src/igf-bullet-graph.dart' show IgfBulletGraphState;
import 'package:igniteui_flutter_gauges/src/igf-linear-graph-range.dart' show IgfLinearGraphRangeState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class BulletGraphAnimateToGauge1
{
//begin eventHandler
    void bulletGraphAnimateToGauge1(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfBulletGraphState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 70;
        gauge.interval = 20;
        gauge.labelInterval = 10;
        gauge.labelExtent = 0.02;
        gauge.valueInnerExtent = 0.5;
        gauge.valueOuterExtent = 0.7;
        gauge.valueBrush = IgfSolidColorBrush.fromString("black");
        gauge.targetValueBrush = IgfSolidColorBrush.fromString("black");
        gauge.targetValueBreadth = 10;
        gauge.targetValue = 60;
        gauge.minorTickCount = 5;
        gauge.minorTickEndExtent = 0.10;
        gauge.minorTickStartExtent = 0.20;
        gauge.tickStartExtent = 0.20;
        gauge.tickEndExtent = 0.05;
        gauge.tickStrokeThickness = 2;
        gauge.scaleBackgroundBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xDB, 0xDB, 0xDB));
        gauge.scaleBackgroundOutline = IgfSolidColorBrush.fromString("gray");
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;
        gauge.scaleBackgroundThickness = 0;
        gauge.backingBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xF7, 0xF7, 0xF7));
        gauge.backingOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xD1, 0xD1, 0xD1));
        gauge.backingStrokeThickness = 0;

        gauge.ranges!.clear();
        gauge.ranges!.add(_range(0, 40, ui.Color.fromARGB(0xFF, 0xA4, 0xBD, 0x29)));
        gauge.ranges!.add(_range(40, 80, ui.Color.fromARGB(0xFF, 0xF8, 0x62, 0x32)));
    }

    IgfLinearGraphRangeState _range(double startValue, double endValue, ui.Color color) {
        var range = IgfLinearGraphRangeState();
        range.startValue = startValue;
        range.endValue = endValue;
        range.brush = IgfSolidColorBrush(color);
        range.outline = IgfSolidColorBrush(color);
        range.innerStartExtent = 0.2;
        range.innerEndExtent = 0.2;
        range.outerStartExtent = 0.95;
        range.outerEndExtent = 0.95;
        return range;
    }
//end eventHandler
}
