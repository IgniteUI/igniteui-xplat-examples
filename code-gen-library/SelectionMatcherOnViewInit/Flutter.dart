//begin imports
import 'dart:async';
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_charts/src/igf-chart-selection.dart' show IgfChartSelectionState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-series-matcher.dart' show IgfSeriesMatcherState;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class SelectionMatcherOnViewInit
{
//begin eventHandler
    //Flutter: Action
    void selectionMatcherOnViewInit() {
        // Shared by the category chart and data chart samples, which bind the same data.
        var content = CodeGenHelper.getDescription<Object>("content")!;
        var selectedItems = content is IgfCategoryChartState
            ? content.selectedSeriesItems!
            : (content as IgfDataChartState).selectedSeriesItems!;

        // Deferred the way the other platforms defer it (Handler.postDelayed on
        // Android): the selection is applied after the chart has had a chance to
        // build its series from the data source.
        Timer(Duration(milliseconds: 100), () {
            var data = CodeGenHelper.findByName<ArrayList<Object?>>("energyRenewableConsumption")!;

            var matcher = IgfSeriesMatcherState();
            var selection = IgfChartSelectionState();
            selection.item = data[1];
            matcher.memberPath = "hydro";
            matcher.memberPathType = "ValueMemberPath";
            selection.matcher = matcher;
            selectedItems.add(selection);

            var matcher2 = IgfSeriesMatcherState();
            var selection2 = IgfChartSelectionState();
            selection2.item = data[2];
            matcher2.memberPath = "wind";
            matcher2.memberPathType = "ValueMemberPath";
            selection2.matcher = matcher2;
            selectedItems.add(selection2);
        });
    }
//end eventHandler
}
