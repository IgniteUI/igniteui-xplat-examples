//begin imports
import 'package:igniteui_flutter_charts/src/igf-callout-label-updating-event-args.dart' show IgfCalloutLabelUpdatingEventArgsState;
//end imports

class TestsUpdateCalloutLabelLong
{
//begin eventHandler
    void testsUpdateCalloutLabelLong(Object? sender, IgfCalloutLabelUpdatingEventArgsState args) {
        args.label = args.label.toString() + " EXTENDED BY THE LABEL UPDATING EVENT";
    }
//end eventHandler
}
