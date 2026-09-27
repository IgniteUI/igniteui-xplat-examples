//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;

//end imports

class TestsDataLegendStyleHeaderWithCurrent
{
//begin eventHandler
    void testsDataLegendStyleHeaderWithCurrent(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        args.titleText = "Current:" + (args.titleText ?? "");
    }
//end eventHandler
}
