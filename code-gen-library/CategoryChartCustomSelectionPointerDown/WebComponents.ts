export class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public categoryChartCustomSelectionPointerDown(o: any, e: any): void {

        var chart = CodeGenHelper.GetDescription<IgcCategoryChartComponent>("content");
        var selectableData = (SelectableData)chart.datasource;
    	let oldItem = e.item as SelectableDataItem;

        if (oldItem === null) return;

        let newItem: SelectableDataItem = new SelectableDataItem({
            category: oldItem.category,
            dataValue: oldItem.dataValue,
            selectedValue: oldItem.selectedValue
        });

        var selectedIndex = -1;
        for (var i = 0; i < selectableData.length; i++) {
            if (oldItem.category === selectableData[i].category) {
                selectedIndex = i;
                break;
            }
        }

        if (oldItem.selectedValue === oldItem.dataValue)
            newItem.selectedValue = null;
        else
            newItem.selectedValue = newItem.dataValue;

        chart.notifySetItem(selectableData, selectedIndex, oldItem, newItem);
    }
    //end eventHandler
}