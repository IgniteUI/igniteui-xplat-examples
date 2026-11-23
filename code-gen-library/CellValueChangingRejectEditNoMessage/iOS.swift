//begin imports
//end imports

public class CellValueChangingRejectEditNoMessage {
    //begin eventHandler
    public func cellValueChangingRejectEditNoMessage(sender: Any?, args: IgsGridCellValueChangingEventArgs?) {
        // rejectEdit alone is how an edit is refused with no message to show. The twin of this item
        // attaches an error instead; calling both would clear the transaction the error hangs on.
        guard let grid = CodeGenHelper.getDescription(IgsDataGrid.self, "content") else { return }
        guard let args = args else { return }
        grid.rejectEdit(editID: args.editID)
    }
    //end eventHandler
}
