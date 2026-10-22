//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;

//end imports

class TestsDataLegendStyleHideSeriesRows
{
//begin eventHandler
    void testsDataLegendStyleHideSeriesRows(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        args.isRowVisible = false;
    }
//end eventHandler
}
