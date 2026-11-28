//begin imports
//end imports

public class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public func categoryChartCustomSelectionPointerDown(sender: Any?, args: IgsDomainChartSeriesPointerEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content"),
              let selectableData = chart.dataSource as? IgsDataAdapter,
              let selectedItem = args?.item as? SelectableDataItem else { return }

        var selectedIndex: Int = -1
        for i in 0..<selectableData.count {
            if (selectableData[i] as? SelectableDataItem)?.category == selectedItem.category {
                selectedIndex = i
                break
            }
        }

        if selectedItem.selectedValue == selectedItem.dataValue {
            selectedItem.selectedValue = Double.nan
        } else {
            selectedItem.selectedValue = selectedItem.dataValue
        }

        // The item changed in place, in the data the chart is bound to.
        chart.notifySetItem(source_: selectableData, index: selectedIndex, oldItem: selectedItem, newItem: selectedItem)
    }
    //end eventHandler
}
