//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-column-event-args.dart' show IgfDataLegendStylingColumnEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSeriesColumns1
{
//begin eventHandler
    void testsDataLegendStyleSeriesColumns1(Object? sender, IgfDataLegendStylingColumnEventArgsState args) {
        switch (args.seriesTitle) {
            case "One":
                args.labelText = "Value";
                args.labelTextColor = IgfSolidColorBrush.fromString("green");
                args.valueText = "+25.000";
                args.valueTextColor = IgfSolidColorBrush.fromString("red");
                break;
            case "Two":
                args.labelText = "Value";
                args.labelTextColor = IgfSolidColorBrush.fromString("blue");
                args.valueText = "+10.000";
                args.valueTextColor = IgfSolidColorBrush.fromString("green");
                break;
            case "Three":
                args.labelText = "Value";
                args.labelTextColor = IgfSolidColorBrush.fromString("red");
                args.valueText = "+20.000";
                args.valueTextColor = IgfSolidColorBrush.fromString("blue");
                break;
        }
    }
//end eventHandler
}
