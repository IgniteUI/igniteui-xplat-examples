//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDomainChartSeriesPointerEventArgs } from 'igniteui-webcomponents-charts';
import { SelectableData, SelectableDataItem } from './SelectableData';
//end imports

export class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public categoryChartCustomSelectionPointerDown(sender: any, args: IgcDomainChartSeriesPointerEventArgs): void {

        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        var selectableData = chart.dataSource as SelectableData;
    	let oldItem = args.item as SelectableDataItem;

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