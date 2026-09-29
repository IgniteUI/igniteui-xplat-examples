//begin imports
import 'package:flutter/widgets.dart' as flutterWidgets;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart' show ChartToolTipUpdatingEventArgs;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddStaticTextTooltip
{
//begin eventHandler
//Flutter: Action
    void testsAddStaticTextTooltip() {
        var chart = CodeGenHelper.getDescription<IgfDataChartState>("content");
        if (chart == null) return;

        for (var series in chart.series!.toArray()) {
            if (series == null || series.isLayer) {
                continue;
            }
            series.chartToolTipUpdating = (Object? sender, ChartToolTipUpdatingEventArgs args) {
                // Where GTK and Kotlin make a label on the first update and set its
                // text on every one after, a Flutter widget is immutable, so this
                // hands back a new Text each time. The proxy holding it is reused
                // either way, so the tooltip is not rebuilt from nothing.
                args.currentView = flutterWidgets.Text("text");
            };
        }
    }
//end eventHandler
}
