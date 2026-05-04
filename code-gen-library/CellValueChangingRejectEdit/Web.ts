//begin imports
//end imports

export class CellValueChangingRejectEdit {
    //begin eventHandler
    public cellValueChangingRejectEdit(s: any, args: any): void {
        s.setEditError(args.editID, "Edit canceled");
        s.rejectEdit(args.editID);
    }
    //end eventHandler
}
