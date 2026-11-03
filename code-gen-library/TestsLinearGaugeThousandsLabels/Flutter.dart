//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-linear-graph-label-event-args.dart' show IgfFormatLinearGraphLabelEventArgsState;
import 'package:igniteui_flutter_core/src/number.dart' show NumberUtil;
//end imports

class TestsLinearGaugeThousandsLabels
{
//begin eventHandler
    void testsLinearGaugeThousandsLabels(Object? sender, IgfFormatLinearGraphLabelEventArgsState args) {
        var value = args.value;
        if (args.value > 1000) {
            value = args.value / 1000;
        }
        // doubleToMinDecimalsString, not toString: the value is a double, so
        // Dart's toString keeps a fraction digit it has no need for and the
        // label read "$0.0 K" instead of "$0 K". This is what the Swift variant
        // of this item uses, and what .NET's double.ToString() gives.
        args.label = "\$" + (NumberUtil.doubleToMinDecimalsString(value) ?? "") + " K";
    }
//end eventHandler
}
