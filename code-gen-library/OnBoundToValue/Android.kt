//begin imports
import com.infragistics.mobile.controls.IgaDataBindingEventArgs;
import com.infragistics.mobile.controls.StringUtil;
//end imports

public class OnBoundToValue {
    //begin eventHandler
    public fun onBoundToValue(sender: Any?, args: IgaDataBindingEventArgs?) {
        val cellInfo = args!!.cellInfo!!;
        // StringUtil.toString1 is the translated stand-in for C#'s object.ToString(), which is what
        // the other heads call here. Kotlin's own toString() keeps a whole double's fraction, so a
        // value of 30 would render "30.0" where every other platform shows "30".
        cellInfo.renderValue = StringUtil.toString1(cellInfo.originalValue);
    }
    //end eventHandler
}
