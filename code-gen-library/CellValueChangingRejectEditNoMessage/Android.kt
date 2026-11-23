//begin imports
import com.infragistics.mobile.controls.IgaDataGrid;
import com.infragistics.mobile.controls.IgaGridCellValueChangingEventArgs;
//end imports

public class CellValueChangingRejectEditNoMessage {
    //begin eventHandler
    public fun cellValueChangingRejectEditNoMessage(sender: Any?, args: IgaGridCellValueChangingEventArgs?) {
        // rejectEdit alone is how an edit is refused with no message to show. The twin of this item
        // attaches an error instead; calling both would clear the transaction the error hangs on.
        var grid = CodeGenHelper.getDescription<IgaDataGrid>("content")!!;
        grid.rejectEdit(args!!.editID);
    }
    //end eventHandler
}
