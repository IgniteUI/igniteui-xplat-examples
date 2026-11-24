//begin imports
import com.infragistics.mobile.controls.IgaDataBindingEventArgs;
//end imports

public class OnBoundToRowIndex {
    //begin eventHandler
    public fun onBoundToRowIndex(sender: Any?, args: IgaDataBindingEventArgs?) {
        val cellInfo = args!!.cellInfo!!;
        cellInfo.renderValue = cellInfo.dataRow.toString();
    }
    //end eventHandler
}
