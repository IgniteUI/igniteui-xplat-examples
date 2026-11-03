//begin imports
//end imports

export class CellValueChangingRejectEdit {
    //begin eventHandler
    public cellValueChangingRejectEdit(s: any, args: any): void {
        // setEditError only, no rejectEdit - rejecting clears the pending transaction the error is
        // attached to, so the grid finds nothing when it checks whether the edit was refused and
        // commits it. An error message means setEditError, an empty one means rejectEdit, never both.
        s.setEditError(args.editID, "Edit canceled");
    }
    //end eventHandler
}
