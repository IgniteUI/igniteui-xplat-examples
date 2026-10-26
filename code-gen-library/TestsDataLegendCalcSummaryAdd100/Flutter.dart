//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-summary-event-args.dart' show IgfDataLegendSummaryEventArgsState;
//end imports

class TestsDataLegendCalcSummaryAdd100
{
//begin eventHandler
    void testsDataLegendCalcSummaryAdd100(Object? sender, IgfDataLegendSummaryEventArgsState args) {
        var total = 100.0;
        var values = args.columnValues;
        if (values != null) {
            for (var value in values) {
                total += value;
            }
        }
        args.summaryValue = total;
    }
//end eventHandler
}
