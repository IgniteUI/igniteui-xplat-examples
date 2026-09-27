//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSeriesRows2
{
//begin eventHandler
    void testsDataLegendStyleSeriesRows2(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        switch (args.seriesTitle) {
            case "Financial1":
                args.titleText = "F1";
                args.titleTextColor = IgfSolidColorBrush.fromString("blue");
                break;
            case "Financial2":
                args.titleText = "F2";
                args.titleTextColor = IgfSolidColorBrush.fromString("orange");
                break;
        }
    }
//end eventHandler
}
