//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSummaryRowsByGroup2
{
//begin eventHandler
    void testsDataLegendStyleSummaryRowsByGroup2(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        switch (args.groupName) {
            case "Group1":
                args.titleText = "Summary";
                args.titleTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Group2":
                args.titleText = "Summary";
                args.titleTextColor = IgfSolidColorBrush.fromString("red");
                break;
        }
    }
//end eventHandler
}
