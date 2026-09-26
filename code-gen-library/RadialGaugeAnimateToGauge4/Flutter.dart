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

class RadialGaugeAnimateToGauge4
{
//begin eventHandler
    void radialGaugeAnimateToGauge4(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfRadialGaugeState>("content");
        if (gauge == null) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 50;
        gauge.value = 25;
        gauge.interval = 5;
        gauge.labelInterval = 5;
        gauge.labelExtent = 0.71;
        // Flutter carries the whole text style rather than a size on its own.
        gauge.font = const flutterWidgets.TextStyle(fontSize: 15);

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleEndExtent = 0.5;
        gauge.needleShape = RadialGaugeNeedleShape.triangle;
        gauge.needleEndWidthRatio = 0.03;
        gauge.needleStartWidthRatio = 0.05;
        gauge.needlePivotShape = RadialGaugePivotShape.circleOverlay;
        gauge.needlePivotWidthRatio = 0.15;
        gauge.needleBaseFeatureWidthRatio = 0.15;
        gauge.needleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needleOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needlePivotBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.needlePivotOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));

        gauge.minorTickCount = 4;
        gauge.minorTickEndExtent = 0.625;
        gauge.minorTickStartExtent = 0.6;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));
        gauge.tickStartExtent = 0.6;
        gauge.tickEndExtent = 0.65;
        gauge.tickStrokeThickness = 2;
        gauge.tickBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0x79, 0x79, 0x7A));

        gauge.scaleStartAngle = 120;
        gauge.scaleEndAngle = 60;
        gauge.scaleBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.fitted;
        gauge.scaleSweepDirection = SweepDirection.clockwise;
        gauge.scaleEndExtent = 0.57;
        gauge.scaleStartExtent = 0.5;

        gauge.backingBrush = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xFC, 0xFC, 0xFC));
        gauge.backingOutline = IgfSolidColorBrush(ui.Color.fromARGB(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.backingStrokeThickness = 5;
        gauge.backingShape = RadialGaugeBackingShape.circular;

        gauge.ranges!.clear();
        gauge.ranges!.add(_range(5, 15, ui.Color.fromARGB(0xFF, 0xF8, 0x62, 0x32), 0.5, 0.57));
        gauge.ranges!.add(_range(15, 35, ui.Color.fromARGB(0xFF, 0xDC, 0x3F, 0x76), 0.5, 0.57));
        gauge.ranges!.add(_range(35, 45, ui.Color.fromARGB(0xFF, 0x74, 0x46, 0xB9), 0.5, 0.57));
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
