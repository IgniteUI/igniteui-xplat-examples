//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class CellValueChangingRejectEditNoMessage
{
    //begin eventHandler
    public void CellValueChangingRejectEditNoMessage(IgbGridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.RejectEdit(args.EditID);
    }
    //end eventHandler
}
