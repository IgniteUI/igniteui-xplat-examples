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

class RadialGaugeAnimateToGauge3
{
//begin eventHandler
    void radialGaugeAnimateToGauge3(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfRadialGaugeState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 10;
        gauge.interval = 10;
        gauge.labelExtent = 0.6;
        gauge.labelInterval = 10;
        // Flutter carries the whole text style rather than a size on its own.
        gauge.font = const flutterWidgets.TextStyle(fontSize: 15);

        gauge.scaleStartAngle = 135;
        gauge.scaleEndAngle = 45;
        gauge.scaleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x0B, 0x8F, 0xED));
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.auto;
        gauge.scaleSweepDirection = SweepDirection.clockwise;
        gauge.scaleEndExtent = 0.825;
        gauge.scaleStartExtent = 0.775;

        gauge.minorTickStartExtent = 0.7;
        gauge.minorTickEndExtent = 0.75;
        gauge.tickStartExtent = 0.675;
        gauge.tickEndExtent = 0.75;

        gauge.backingShape = RadialGaugeBackingShape.fitted;
        gauge.backingBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xFC, 0xFC, 0xFC));
        gauge.backingOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.backingOversweep = 5;
        gauge.backingCornerRadius = 10;
        gauge.backingOuterExtent = 0.9;

        gauge.needleShape = RadialGaugeNeedleShape.needleWithBulb;
        gauge.needlePivotShape = RadialGaugePivotShape.circleOverlay;
        gauge.needleEndExtent = 0.5;
        gauge.needlePointFeatureExtent = 0.3;
        gauge.needlePivotWidthRatio = 0.2;
        gauge.needleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.needleOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.needlePivotBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.needlePivotOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x9F, 0x9F, 0xA0));

        gauge.tickBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x33, 0x33, 0x33));
        gauge.minorTickBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x49, 0x49, 0x49));
        gauge.minorTickCount = 6;

        gauge.ranges!.clear();
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
