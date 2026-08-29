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
        var selectedItem = args.Item as SelectableDataItem;
        if (selectedItem == null) return;

        if (selectedItem.SelectedValue == selectedItem.DataValue)
            selectedItem.SelectedValue = double.NaN;
        else
            selectedItem.SelectedValue = selectedItem.DataValue;

        // Nothing tells the chart on this platform: the data it was given is observable and its items
        // raise the change themselves, which is what setting the value above has just done.
    }
    //end eventHandler
}
