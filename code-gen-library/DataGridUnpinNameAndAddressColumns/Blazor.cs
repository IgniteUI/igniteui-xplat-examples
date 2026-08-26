//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridUnpinNameAndAddressColumns
{
    //begin eventHandler
    public void DataGridUnpinNameAndAddressColumns(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[0], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[1], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[2], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[6], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[7], PinnedPositions.None);
        grid.PinColumn(grid.ActualColumns[8], PinnedPositions.None);
    }
    //end eventHandler
}
