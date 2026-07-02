//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPinAddressColumnsRight
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridPinAddressColumnsRight(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[6], PinnedPositions.Right);
        grid.PinColumn(grid.ActualColumns[7], PinnedPositions.Right);
        grid.PinColumn(grid.ActualColumns[8], PinnedPositions.Right);
    }
    //end eventHandler
}
