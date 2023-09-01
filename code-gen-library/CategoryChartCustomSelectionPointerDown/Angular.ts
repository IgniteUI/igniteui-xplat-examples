export class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public categoryChartCustomSelectionPointerDown(e: any): void {

        let oldItem = e.args.item as SelectableDataItem;

        if (oldItem === null) return;

        let newItem: SelectableDataItem = new SelectableDataItem({
            category: oldItem.category,
            dataValue: oldItem.dataValue,
            selectedValue: oldItem.selectedValue
        });

        var selectedIndex = -1;
        for (var i = 0; i < this.selectableData.length; i++) {
            if (oldItem.category === this.selectableData[i].category) {
                selectedIndex = i;
                break;
            }
        }

        if (oldItem.selectedValue === oldItem.dataValue)
            newItem.selectedValue = null;
        else
            newItem.selectedValue = newItem.dataValue;

        this.chart.notifySetItem(this.selectableData, selectedIndex, oldItem, newItem);
    }
    //end eventHandler
}