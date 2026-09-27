//begin imports
import 'dart:math' as dartMath;
import 'package:igniteui_flutter_gauges/src/igf-format-radial-gauge-label-event-args.dart' show IgfFormatRadialGaugeLabelEventArgsState;
import 'package:igniteui_flutter_core/src/number.dart' show NumberUtil;
//end imports

class TestsRadialGaugeFormatLabelWithAllValues
{
//begin eventHandler
    void testsRadialGaugeFormatLabelWithAllValues(Object? sender, IgfFormatRadialGaugeLabelEventArgsState args) {
        var radToDeg = 180.0 / dartMath.pi;

        var angleDeg = roundToEven(args.angle * radToDeg);
        var startAngleDeg = roundToEven(args.startAngle * radToDeg);
        var endAngleDeg = roundToEven(args.endAngle * radToDeg);

        args.label =
            "Value:" + (NumberUtil.doubleToMinDecimalsString(args.value) ?? "") + "," +
            "Angle:" + angleDeg.toInt().toString() + "," +
            "StartAngle:" + startAngleDeg.toInt().toString() + "," +
            "EndAngle:" + endAngleDeg.toInt().toString() + "," +
            "ActualMinimumValue:" + (NumberUtil.doubleToMinDecimalsString(args.actualMinimumValue) ?? "") + "," +
            "ActualMaximumValue:" + (NumberUtil.doubleToMinDecimalsString(args.actualMaximumValue) ?? "");
    }

    // .NET's Math.Round -- which the Desktop variant of this item uses, and which
    // the expected label text was recorded from -- rounds halves to even. Dart's
    // round() goes half away from zero, so the tie case is spelled out here, the
    // same way the Web variant does it.
    double roundToEven(double n) {
        var f = n.floorToDouble();
        var frac = n - f;

        if ((frac - 0.5).abs() < 1e-12) {
            return (f % 2 == 0) ? f : f + 1;
        }
        return n.roundToDouble();
    }
//end eventHandler
}
