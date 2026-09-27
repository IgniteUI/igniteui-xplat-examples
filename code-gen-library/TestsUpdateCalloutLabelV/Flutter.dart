//begin imports
import 'package:igniteui_flutter_charts/src/igf-callout-label-updating-event-args.dart' show IgfCalloutLabelUpdatingEventArgsState;
//end imports

class TestsUpdateCalloutLabelV
{
//begin eventHandler
    void testsUpdateCalloutLabelV(Object? sender, IgfCalloutLabelUpdatingEventArgsState args) {
        var item = args.item as Map<Object?, Object?>;
        args.label = item["Label"].toString() + "-V-" + item["Value"].toString();
    }
//end eventHandler
}
