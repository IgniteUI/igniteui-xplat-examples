//begin imports
import com.infragistics.mobile.controls.IgaDataGrid
import com.infragistics.mobile.controls.IgaGridCellValueChangingEventArgs
//end imports

public class CellValueChangingRejectEditNoMessage {
    //begin eventHandler
    public fun cellValueChangingRejectEditNoMessage(sender: Any?, args: IgaGridCellValueChangingEventArgs) {
        val grid = sender as IgaDataGrid
        grid.rejectEdit(args.editID)
    }
    //end eventHandler
}
