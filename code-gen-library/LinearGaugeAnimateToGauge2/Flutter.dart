//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_gauges/src/igf-linear-gauge.dart' show IgfLinearGaugeState;
import 'package:igniteui_flutter_gauges/src/igf-linear-graph-range.dart' show IgfLinearGraphRangeState;
import 'package:igniteui_flutter_gauges/src/LinearGraphNeedleShape.dart' show LinearGraphNeedleShape;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class LinearGaugeAnimateToGauge2
{
//begin eventHandler
    void linearGaugeAnimateToGauge2(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfLinearGaugeState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 100;
        gauge.maximumValue = 200;
        gauge.value = 150;
        gauge.interval = 20;
        gauge.labelInterval = 20;
        gauge.labelExtent = 0.0;

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.triangle;
        gauge.needleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needleOutline = IgfSolidColorBrush.fromString("white");
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = 0.3;

        gauge.minorTickCount = 4;
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
        gauge.ranges!.add(_range(100, 125, ui.Color.fromARGB(0xFF, 0x00, 0x78, 0xC8)));
        gauge.ranges!.add(_range(125, 150, ui.Color.fromARGB(0xFF, 0x00, 0x99, 0xFF)));
        gauge.ranges!.add(_range(150, 175, ui.Color.fromARGB(0xFF, 0x21, 0xA7, 0xFF)));
        gauge.ranges!.add(_range(175, 200, ui.Color.fromARGB(0xFF, 0x45, 0xB9, 0xFF)));
    }

    IgfLinearGraphRangeState _range(double startValue, double endValue, ui.Color color) {
        var range = IgfLinearGraphRangeState();
        range.startValue = startValue;
        range.endValue = endValue;
        range.brush = IgfSolidColorBrush(color);
        range.outline = IgfSolidColorBrush(color);
        range.innerStartExtent = 0.075;
        range.innerEndExtent = 0.075;
        range.outerStartExtent = 0.65;
        range.outerEndExtent = 0.65;
        return range;
    }
//end eventHandler
}
