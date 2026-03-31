//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class CellValueChangingRejectEdit
{
    //begin eventHandler
    public void CellValueChangingRejectEdit(IgbGridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.SetEditError(args.EditID, "Edit canceled");
        grid.RejectEdit(args.EditID);
    }
    //end eventHandler
}
