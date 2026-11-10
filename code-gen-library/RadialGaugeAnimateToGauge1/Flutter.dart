//begin imports
import 'dart:ui' as ui;
import 'package:flutter/widgets.dart' as flutterWidgets;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_core/src/SweepDirection.dart' show SweepDirection;
import 'package:igniteui_flutter_gauges/src/igf-radial-gauge.dart' show IgfRadialGaugeState;
import 'package:igniteui_flutter_gauges/src/igf-radial-gauge-range.dart' show IgfRadialGaugeRangeState;
import 'package:igniteui_flutter_gauges/src/RadialGaugeBackingShape.dart' show RadialGaugeBackingShape;
import 'package:igniteui_flutter_gauges/src/RadialGaugeNeedleShape.dart' show RadialGaugeNeedleShape;
import 'package:igniteui_flutter_gauges/src/RadialGaugePivotShape.dart' show RadialGaugePivotShape;
import 'package:igniteui_flutter_gauges/src/RadialGaugeScaleOversweepShape.dart' show RadialGaugeScaleOversweepShape;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class RadialGaugeAnimateToGauge1
{
//begin eventHandler
    void radialGaugeAnimateToGauge1(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfRadialGaugeState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 10;
        gauge.value = 7.5;

        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = IgfSolidColorBrush.fromString("transparent");
        gauge.scaleSweepDirection = SweepDirection.clockwise;

        gauge.backingOutline = IgfSolidColorBrush.fromString("white");
        gauge.backingBrush = IgfSolidColorBrush.fromString("white");
        gauge.backingShape = RadialGaugeBackingShape.fitted;

        gauge.needleEndExtent = 0.8;
        gauge.needleShape = RadialGaugeNeedleShape.triangle;
        gauge.needlePivotShape = RadialGaugePivotShape.circle;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needleOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));

        gauge.tickBrush = IgfSolidColorBrush.fromString("transparent");
        gauge.minorTickBrush = IgfSolidColorBrush.fromString("transparent");

        gauge.labelInterval = 5;
        gauge.labelExtent = 0.915;
        // Flutter carries the whole text style rather than a size on its own.
        gauge.font = const flutterWidgets.TextStyle(fontSize: 15);

        gauge.ranges!.clear();
        gauge.ranges!.add(_range(0, 5, ui.Color.fromARGB(0xFF, 0xA4, 0xBD, 0x29), 0.3, 0.9));
        gauge.ranges!.add(_range(5, 10, ui.Color.fromARGB(0xFF, 0xF8, 0x62, 0x32), 0.3, 0.9));
    }

    IgfRadialGaugeRangeState _range(double startValue, double endValue, ui.Color color, double inner, double outer) {
        var range = IgfRadialGaugeRangeState();
        range.startValue = startValue;
        range.endValue = endValue;
        range.brush = IgfSolidColorBrush(color);
        range.outline = IgfSolidColorBrush(color);
        range.innerStartExtent = inner;
        range.innerEndExtent = inner;
        range.outerStartExtent = outer;
        range.outerEndExtent = outer;
        return range;
    }
//end eventHandler
}
