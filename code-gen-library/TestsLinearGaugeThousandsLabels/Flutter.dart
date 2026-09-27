//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-linear-graph-label-event-args.dart' show IgfFormatLinearGraphLabelEventArgsState;
//end imports

class TestsLinearGaugeThousandsLabels
{
//begin eventHandler
    void testsLinearGaugeThousandsLabels(Object? sender, IgfFormatLinearGraphLabelEventArgsState args) {
        var value = args.value;
        if (args.value > 1000) {
            value = args.value / 1000;
        }
        args.label = "\$" + value.toString() + " K";
    }
//end eventHandler
}
