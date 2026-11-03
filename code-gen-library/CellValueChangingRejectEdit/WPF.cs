//begin imports
using Infragistics.Controls.Grids;
//end imports

public class CellValueChangingRejectEdit
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCellValueChanging
    public void CellValueChangingRejectEdit(object sender, GridCellValueChangingEventArgs args)
    {
        // SetEditError only, no RejectEdit. Rejecting clears the pending transaction, and the error
        // is attached to that transaction - so calling both leaves the grid with nothing to find
        // when it checks whether the edit was refused, and the edit commits and closes as if it had
        // been accepted. Attaching the error is what refuses it and keeps the cell in edit showing
        // the message. This is what DataFireTesting's handler for this grid does: an error message
        // means SetEditError, an empty one means RejectEdit, never both.
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.SetEditError(args.EditID, "Edit canceled");
    }
    //end eventHandler
}
