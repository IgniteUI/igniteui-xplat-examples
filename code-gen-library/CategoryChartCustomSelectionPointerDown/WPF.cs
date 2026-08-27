//begin imports
using Infragistics.Controls.Charts;
using System.Collections;
//end imports

public class CategoryChartCustomSelectionPointerDown
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DomainChartSeriesPointerEventHandler
    public void CategoryChartCustomSelectionPointerDown(object sender, DomainChartSeriesPointerEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var selectableData = (SelectableData)chart.ItemsSource;
        var selectedItem = args.Item as SelectableDataItem;
        if (selectedItem == null) return;

        var selectedIndex = -1;
        for (var i = 0; i < selectableData.Count; i++)
        {
            if (selectedItem.Category == selectableData[i].Category)
            {
                selectedIndex = i; break;
            }
        }

        if (selectedItem.SelectedValue == selectedItem.DataValue)
            selectedItem.SelectedValue = double.NaN;
        else
            selectedItem.SelectedValue = selectedItem.DataValue;

        chart.NotifySetItem(selectableData, selectedIndex, selectedItem, selectedItem);
    }
    //end eventHandler
}
