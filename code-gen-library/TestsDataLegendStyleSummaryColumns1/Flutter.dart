//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-column-event-args.dart' show IgfDataLegendStylingColumnEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSummaryColumns1
{
//begin eventHandler
    void testsDataLegendStyleSummaryColumns1(Object? sender, IgfDataLegendStylingColumnEventArgsState args) {
        args.valueTextColor = IgfSolidColorBrush.fromString("red");
    }
//end eventHandler
}
