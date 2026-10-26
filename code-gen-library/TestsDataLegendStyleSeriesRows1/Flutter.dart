//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSeriesRows1
{
//begin eventHandler
    void testsDataLegendStyleSeriesRows1(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        switch (args.seriesTitle) {
            case "One":
                args.titleText = "Series1";
                args.titleTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Two":
                args.titleText = "Series2";
                args.titleTextColor = IgfSolidColorBrush.fromString("red");
                break;
            case "Three":
                args.titleText = "Series3";
                args.titleTextColor = IgfSolidColorBrush.fromString("green");
                break;
        }
    }
//end eventHandler
}
