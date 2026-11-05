//begin imports
import com.infragistics.mobile.controls.IgaDataGrid;
import com.infragistics.mobile.controls.IgaGridCellValueChangingEventArgs;
//end imports

public class CellValueChangingRejectEdit {
    //begin eventHandler
    public fun cellValueChangingRejectEdit(sender: Any?, args: IgaGridCellValueChangingEventArgs?) {
        // setEditError only, no rejectEdit - rejecting clears the pending transaction the error is
        // attached to, so the grid finds nothing when it checks whether the edit was refused and
        // commits it. An error message means setEditError, an empty one means rejectEdit, never both.
        var grid = CodeGenHelper.getDescription<IgaDataGrid>("content")!!;
        grid.setEditError(args!!.editID, "Edit canceled");
    }
    //end eventHandler
}
