//begin imports
import com.infragistics.mobile.controls.IgaDomainChartSeriesPointerEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

public class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public fun categoryChartCustomSelectionPointerDown(sender: Any?, args: IgaDomainChartSeriesPointerEventArgs?) {

        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        var selectableData = chart.dataSource as SelectableData?;
        var oldItem = args!!.item as SelectableDataItem?;

        if (oldItem === null) return;

        var newItem: SelectableDataItem = SelectableDataItem()
        newItem.category = oldItem!!.category;
        newItem.dataValue = oldItem!!.dataValue;
        newItem.selectedValue = oldItem!!.selectedValue;
        
        var selectedIndex: Int = -1;
        for (i in 0..< selectableData!!.size) {
            if (oldItem!!.category === selectableData!![i].category) {
                selectedIndex = i;
                break;
            }
        }

        if (oldItem.selectedValue == oldItem.dataValue) {
            newItem.selectedValue = Double.NaN;
        }
        else {
            newItem.selectedValue = newItem.dataValue;
        }

        chart.notifySetItem(selectableData, selectedIndex, oldItem, newItem);
    }
    //end eventHandler
}