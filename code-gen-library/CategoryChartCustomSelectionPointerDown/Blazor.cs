//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class CategoryChartCustomSelectionPointerDown
{
    //begin eventHandler
    public void CategoryChartCustomSelectionPointerDown(IgbDomainChartSeriesPointerEventArgs args)
    {
        var selectedItem = args.Item as SelectableDataItem;
        if (selectedItem == null) return;

        var selectedIndex = -1;
        for (var i = 0; i < this.SelectableData.Count; i++)
        {
            if (selectedItem.Category == this.SelectableData[i].Category)
            {
                selectedIndex = i; break;
            }
        }

        if (selectedItem.SelectedValue == selectedItem.DataValue)
            selectedItem.SelectedValue = double.NaN;
        else
            selectedItem.SelectedValue = selectedItem.DataValue;

        chart.NotifyUpdateItem(this.SelectableData, selectedIndex, selectedItem, false);
    }
    //end eventHandler
}