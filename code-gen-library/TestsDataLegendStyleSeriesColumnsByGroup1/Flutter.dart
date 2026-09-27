//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-column-event-args.dart' show IgfDataLegendStylingColumnEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSeriesColumnsByGroup1
{
//begin eventHandler
    void testsDataLegendStyleSeriesColumnsByGroup1(Object? sender, IgfDataLegendStylingColumnEventArgsState args) {
        switch (args.groupName) {
            case "Group1":
                args.labelText = "Value";
                args.labelTextColor = IgfSolidColorBrush.fromString("blue");
                args.valueTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Group2":
                args.labelText = "Value";
                args.labelTextColor = IgfSolidColorBrush.fromString("red");
                args.valueTextColor = IgfSolidColorBrush.fromString("red");
                break;
        }
    }
//end eventHandler
}
