//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_charts/src/igf-domain-chart-series-pointer-event-args.dart' show IgfDomainChartSeriesPointerEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './SelectableData.dart' show SelectableData, SelectableDataItem;
//end imports
//begin eventHandler
void categoryChartCustomSelectionPointerDown(Object? sender, IgfDomainChartSeriesPointerEventArgsState args) {
    var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
    var selectableData = chart.dataSource as SelectableData;
    var selectedItem = args.item as SelectableDataItem?;
    if (selectedItem == null) {
        return;
    }

    var selectedIndex = -1;
    for (var i = 0; i < selectableData.count; i++) {
        if (selectedItem.category == selectableData[i]!.category) {
            selectedIndex = i;
            break;
        }
    }

    if (selectedItem.selectedValue == selectedItem.dataValue) {
        selectedItem.selectedValue = double.nan;
    } else {
        selectedItem.selectedValue = selectedItem.dataValue;
    }

    chart.notifySetItem(selectableData, selectedIndex, selectedItem, selectedItem);
}
//end eventHandler
