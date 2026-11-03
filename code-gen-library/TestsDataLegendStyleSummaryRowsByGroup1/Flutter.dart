//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSummaryRowsByGroup1
{
//begin eventHandler
    void testsDataLegendStyleSummaryRowsByGroup1(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        switch (args.groupName) {
            case "Group1":
                args.titleText = "The Total";
                args.titleTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Group2":
                args.titleText = "The Total";
                args.titleTextColor = IgfSolidColorBrush.fromString("red");
                break;
        }
    }
//end eventHandler
}
