//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_gauges/src/igf-linear-gauge.dart' show IgfLinearGaugeState;
import 'package:igniteui_flutter_gauges/src/igf-linear-graph-range.dart' show IgfLinearGraphRangeState;
import 'package:igniteui_flutter_gauges/src/LinearGraphNeedleShape.dart' show LinearGraphNeedleShape;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class LinearGaugeAnimateToGauge3
{
//begin eventHandler
    void linearGaugeAnimateToGauge3(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfLinearGaugeState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.value = 50;
        gauge.interval = 10;
        gauge.labelInterval = 10;
        gauge.labelExtent = 0.0;

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.needle;
        gauge.needleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needleOutline = IgfSolidColorBrush.fromString("white");
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = 0.3;

        gauge.minorTickCount = 5;
        gauge.minorTickEndExtent = 0.10;
        gauge.minorTickStartExtent = 0.20;
        gauge.minorTickStrokeThickness = 1;
        gauge.tickStartExtent = 0.25;
        gauge.tickEndExtent = 0.05;
        gauge.tickStrokeThickness = 2;

        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush = IgfSolidColorBrush.fromString("white");
        gauge.scaleOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xDB, 0xDB, 0xDB));
        gauge.scaleInnerExtent = 0.075;
        gauge.scaleOuterExtent = 0.85;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        gauge.backingBrush = IgfSolidColorBrush.fromString("white");
        gauge.backingOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xD1, 0xD1, 0xD1));
        gauge.backingStrokeThickness = 0;

        gauge.ranges!.clear();
        gauge.ranges!.add(_range(0, 30, ui.Color.fromARGB(0xFF, 0x9F, 0xB3, 0x28)));
        gauge.ranges!.add(_range(30, 70, ui.Color.fromARGB(0xFF, 0x43, 0x8C, 0x47)));
        gauge.ranges!.add(_range(70, 100, ui.Color.fromARGB(0xFF, 0x3F, 0x51, 0xB5)));
    }

    IgfLinearGraphRangeState _range(double startValue, double endValue, ui.Color color) {
        var range = IgfLinearGraphRangeState();
        range.startValue = startValue;
        range.endValue = endValue;
        range.brush = IgfSolidColorBrush(color);
        range.outline = IgfSolidColorBrush(color);
        range.innerStartExtent = 0.075;
        range.innerEndExtent = 0.075;
        range.outerStartExtent = 0.95;
        range.outerEndExtent = 0.95;
        return range;
    }
//end eventHandler
}
