//begin imports
import com.infragistics.mobile.controls.IgaAlignRadialGaugeLabelEventArgs
//end imports

class TestsAlignGaugeLabels {

    //begin eventHandler
    fun testsAlignGaugeLabels(sender: Any?, args: IgaAlignRadialGaugeLabelEventArgs) {
        args.offsetX = 15.0;
		args.offsetY = 12.0;
    }
    //end eventHandler

}