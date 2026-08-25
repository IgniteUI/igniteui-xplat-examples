//begin imports
using Infragistics.Controls.Charts;
//end imports

public class CategoryChartCustomSelectionPointerDown
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DomainChartSeriesPointerEventHandler
    public void CategoryChartCustomSelectionPointerDown(object sender, DomainChartSeriesPointerEventArgs args)
    {
        var selectedItem = args.Item as SelectableDataItem;
        if (selectedItem == null) return;

        // Toggling the value is the whole of it here. This platform has no NotifySetItem to call --
        // it follows the item's own change notification instead, which is why the index the other
        // platforms pass along is not needed.
        if (selectedItem.SelectedValue == selectedItem.DataValue)
            selectedItem.SelectedValue = double.NaN;
        else
            selectedItem.SelectedValue = selectedItem.DataValue;
    }
    //end eventHandler
}
