//begin imports
//end imports

public class CellValueChangingRejectEdit {
    //begin eventHandler
    public func cellValueChangingRejectEdit(sender: Any?, args: IgsGridCellValueChangingEventArgs?) {
        // setEditError only, no rejectEdit - rejecting clears the pending transaction the error is
        // attached to, so the grid finds nothing when it checks whether the edit was refused and
        // commits it. An error message means setEditError, an empty one means rejectEdit, never both.
        guard let grid = CodeGenHelper.getDescription(IgsDataGrid.self, "content") else { return }
        guard let args = args else { return }
        grid.setEditError(editID: args.editID, errorMessage: "Edit canceled")
    }
    //end eventHandler
}
