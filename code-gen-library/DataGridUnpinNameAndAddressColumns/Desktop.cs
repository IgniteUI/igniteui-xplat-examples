//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridUnpinNameAndAddressColumns
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridUnpinNameAndAddressColumns(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[0], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[1], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[2], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[6], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[7], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[8], PinnedPositions.None);
    }
    //end eventHandler
}
