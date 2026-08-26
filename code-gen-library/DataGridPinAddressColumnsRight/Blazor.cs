//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridPinAddressColumnsRight
{
    //begin eventHandler
    public void DataGridPinAddressColumnsRight(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[6], PinnedPositions.Right);
        grid.PinColumn(grid.ActualColumns[7], PinnedPositions.Right);
        grid.PinColumn(grid.ActualColumns[8], PinnedPositions.Right);
    }
    //end eventHandler
}
