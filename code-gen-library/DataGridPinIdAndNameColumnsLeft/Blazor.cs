//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridPinIdAndNameColumnsLeft
{
    //begin eventHandler
    public void DataGridPinIdAndNameColumnsLeft(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.PinColumn(grid.ActualColumns[0], PinnedPositions.Left);
        grid.PinColumn(grid.ActualColumns[1], PinnedPositions.Left);
        grid.PinColumn(grid.ActualColumns[2], PinnedPositions.Left);
    }
    //end eventHandler
}
