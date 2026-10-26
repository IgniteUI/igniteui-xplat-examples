//begin imports
import 'package:flutter/widgets.dart' as flutterWidgets;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart' show ChartToolTipUpdatingEventArgs;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddNameTooltip
{
//begin eventHandler
//Flutter: Action
    void testsAddNameTooltip() {
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
                // GTK reads this as an IDictionary<string, object>. The data item
                // here is the product's DictionaryDataItem, which is an IDictionary
                // but not a Dart Map, so casting to Map throws. Both it and a plain
                // Map answer containsKey/[], and naming the generic type would mean
                // importing a $-suffixed URI, so go through dynamic.
                var item = args.currentData?.item;
                if (item == null) {
                    return;
                }
                var dict = item as dynamic;
                if (dict.containsKey("Name") != true) {
                    return;
                }
                var name = dict["Name"];
                if (name == null) {
                    return;
                }
                args.currentView = flutterWidgets.Text(name.toString());
            };
        }
    }
//end eventHandler
}
