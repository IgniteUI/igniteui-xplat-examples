//begin imports
//end imports

public class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public func categoryChartCustomSelectionPointerDown(sender: Any?, args: IgsDomainChartSeriesPointerEventArgs?) {

        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        let selectableData = chart.dataSource as? SelectableData
        guard let oldItem = args?.item as? SelectableDataItem else { return }

        let newItem = SelectableDataItem()
        newItem.category = oldItem.category
        newItem.dataValue = oldItem.dataValue
        newItem.selectedValue = oldItem.selectedValue
        var selectedIndex: Int = -1
        for i in 0..<selectableData!.size {
            if oldItem.category == selectableData![i].category {
                selectedIndex = i
                break
            }
        }

        if oldItem.selectedValue == oldItem.dataValue {
            newItem.selectedValue = Double.nan
        } else {
            newItem.selectedValue = newItem.dataValue
        }

        chart.notifySetItem(selectableData, selectedIndex, oldItem, newItem)
    }
    //end eventHandler
}
