//begin imports
import 'package:igniteui_flutter_charts/src/igf-chart-series-event-args.dart' show IgfChartSeriesEventArgsState;
import 'package:igniteui_flutter_core/src/LegendItemBadgeMode.dart' show LegendItemBadgeMode;
//end imports

class TestsUpdateBadgeModeInSeriesAddedEvent
{
//begin eventHandler
    void testsUpdateBadgeModeInSeriesAddedEvent(Object? sender, IgfChartSeriesEventArgsState args) {
        args.series!.legendItemBadgeMode = LegendItemBadgeMode.matchSeries;
    }
//end eventHandler
}
