//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSummaryRows1
{
//begin eventHandler
    void testsDataLegendStyleSummaryRows1(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        args.titleText = "The Total";
        args.titleTextColor = IgfSolidColorBrush.fromString("blue");
    }
//end eventHandler
}
