//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
//end imports

class TestsDataLegendHideRowOnSeriesTwo
{
//begin eventHandler
    void testsDataLegendHideRowOnSeriesTwo(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        if (args.seriesTitle == "Two") {
            args.isRowVisible = false;
        }
    }
//end eventHandler
}
