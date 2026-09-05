//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class CellValueChangingRejectEdit
{
    //begin eventHandler
    public void CellValueChangingRejectEdit(IgbGridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        // SetEditError only, no RejectEdit - rejecting clears the pending transaction the error is
        // attached to, so the grid finds nothing when it checks whether the edit was refused and
        // commits it. An error message means SetEditError, an empty one means RejectEdit, never both.
        grid.SetEditError(args.EditID, "Edit canceled");
    }
    //end eventHandler
}
