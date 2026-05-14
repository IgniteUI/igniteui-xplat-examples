//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPinIdAndNameColumnsLeft
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridPinIdAndNameColumnsLeft(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[0], PinnedPositions.Left);
        grid.PinColumn(grid.ActualColumns[1], PinnedPositions.Left);
        grid.PinColumn(grid.ActualColumns[2], PinnedPositions.Left);
    }
    //end eventHandler
}
