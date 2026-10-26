//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-column-event-args.dart' show IgfDataLegendStylingColumnEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSummaryColumns3
{
//begin eventHandler
    void testsDataLegendStyleSummaryColumns3(Object? sender, IgfDataLegendStylingColumnEventArgsState args) {
        switch (args.valueMemberPath) {
            case "Open":
            case "[Open]":
                args.valueTextColor = IgfSolidColorBrush.fromString("green");
                break;
            case "High":
            case "[High]":
                args.valueTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Low":
            case "[Low]":
                args.valueTextColor = IgfSolidColorBrush.fromString("orange");
                break;
            case "Close":
            case "[Close]":
                args.valueTextColor = IgfSolidColorBrush.fromString("red");
                break;
        }
    }
//end eventHandler
}
