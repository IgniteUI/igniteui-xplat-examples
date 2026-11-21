//begin imports
import 'package:flutter/widgets.dart' as flutterWidgets;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_charts/src/igf-chart-series-event-args.dart' show IgfChartSeriesEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-series.dart' show IgfSeriesState;
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart' show ChartToolTipUpdatingEventArgs;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddStaticTextTooltip
{
//begin eventHandler
//Flutter: Action
    void testsAddStaticTextTooltip() {
        var content = CodeGenHelper.getDescription<Object>("content")!;
        // A category chart makes its own series, so they get the tooltip as it adds them;
        // any it has already made are reached through its data chart.
        if (content is IgfCategoryChartState) {
            content.seriesAdded = (Object? sender, IgfChartSeriesEventArgsState args) {
                _addStaticTextTooltip(args.series!);
            };
            for (var series in content.dataChart!.series!.toArray()) {
                _addStaticTextTooltip(series!);
            }
            return;
        }
        var chart = content as IgfDataChartState;
        for (var series in chart.series!.toArray()) {
            _addStaticTextTooltip(series!);
        }
    }

    void _addStaticTextTooltip(IgfSeriesState series) {
        if (series.isLayer) {
            return;
        }
        series.chartToolTipUpdating = (Object? sender, ChartToolTipUpdatingEventArgs args) {
            // Where GTK and Kotlin make a label on the first update and set its
            // text on every one after, a Flutter widget is immutable, so this
            // hands back a new Text each time. The proxy holding it is reused
            // either way, so the tooltip is not rebuilt from nothing.
            args.currentView = flutterWidgets.Text("text");
        };
    }
//end eventHandler
}
