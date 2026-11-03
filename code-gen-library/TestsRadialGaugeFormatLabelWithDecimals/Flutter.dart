//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-radial-gauge-label-event-args.dart' show IgfFormatRadialGaugeLabelEventArgsState;
//end imports

class TestsRadialGaugeFormatLabelWithDecimals
{
//begin eventHandler
    void testsRadialGaugeFormatLabelWithDecimals(Object? sender, IgfFormatRadialGaugeLabelEventArgsState args) {
        args.label = args.value.toStringAsFixed(3);
    }
//end eventHandler
}
