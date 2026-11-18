//begin imports
import com.infragistics.mobile.controls.IgaDataGrid
import com.infragistics.mobile.controls.IgaGridCellValueChangingEventArgs
//end imports

public class CellValueChangingRejectEdit {
    //begin eventHandler
    public fun cellValueChangingRejectEdit(sender: Any?, args: IgaGridCellValueChangingEventArgs) {
        val grid = sender as IgaDataGrid
        grid.setEditError(args.editID, "Edit canceled")
    }
    //end eventHandler
}
