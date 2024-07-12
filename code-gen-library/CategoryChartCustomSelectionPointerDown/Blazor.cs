//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class CategoryChartCustomSelectionPointerDown
{
    //begin eventHandler
    public void CategoryChartCustomSelectionPointerDown(IgbDomainChartSeriesPointerEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var selectableData = (SelectableData)chart.DataSource;
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

        chart.NotifyUpdateItem(selectableData, selectedIndex, selectedItem, false);
    }
    //end eventHandler
}