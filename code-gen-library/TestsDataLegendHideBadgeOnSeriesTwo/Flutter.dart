//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
//end imports

class TestsDataLegendHideBadgeOnSeriesTwo
{
//begin eventHandler
    void testsDataLegendHideBadgeOnSeriesTwo(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        if (args.seriesTitle == "Two") {
            args.isBadgeVisible = false;
        }
    }
//end eventHandler
}
