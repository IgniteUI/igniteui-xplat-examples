//begin imports
import com.infragistics.mobile.controls.IgaAlignLinearGraphLabelEventArgs;
//end imports

public class GaugeAlignLabelWithOffset {
    //begin eventHandler
    public fun gaugeAlignLabelWithOffset(sender: Any?, args: IgaAlignLinearGraphLabelEventArgs) {
        args.offsetX += 15;
        args.offsetY += 12;
    }
    //end eventHandler
}