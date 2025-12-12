//begin imports
import com.infragistics.mobile.controls.IgaFormatLinearGraphLabelEventArgs;
//end imports

public class GaugeAttachPrependFormatter {
    //begin eventHandler
    public fun gaugeAttachPrependFormatter(sender: Any?, args: IgaFormatLinearGraphLabelEventArgs?) {
        args!!.label = "$" + args!!.label;
    }
    //end eventHandler
}