//begin imports
import com.infragistics.mobile.controls.IgaDomainChartSeriesPointerEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

public class CategoryChartCustomSelectionPointerDown {
    //begin eventHandler
    public fun categoryChartCustomSelectionPointerDown(sender: Any?, args: IgaDomainChartSeriesPointerEventArgs?) {

        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!;
        val selectableData = chart.dataSource as List<SelectableDataItem>;
        val selectedItem = args?.item as? SelectableDataItem ?: return;
        val selectedIndex = selectableData.indexOfFirst { it.category == selectedItem.category };

        selectedItem.selectedValue = if (selectedItem.selectedValue == selectedItem.dataValue) {
            Double.NaN;
        } else {
            selectedItem.dataValue;
        };

        chart.notifySetItem(selectableData, selectedIndex, selectedItem, selectedItem);
    }
    //end eventHandler
}