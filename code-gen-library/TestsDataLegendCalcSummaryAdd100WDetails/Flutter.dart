//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-summary-event-args.dart' show IgfDataLegendSummaryEventArgsState;
//end imports

class TestsDataLegendCalcSummaryAdd100WDetails
{
//begin eventHandler
    void testsDataLegendCalcSummaryAdd100WDetails(Object? sender, IgfDataLegendSummaryEventArgsState args) {
        var total = 100.0;
        var values = args.columnValues;
        if (values != null) {
            for (var value in values) {
                total += value;
            }
        }
        args.summaryValue = total;
        args.summaryLabel = "A:";
        args.summaryUnits = "S+100";
    }
//end eventHandler
}
