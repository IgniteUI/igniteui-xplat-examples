//begin imports
import com.infragistics.mobile.controls.IgaAlignLinearGraphLabelEventArgs
//end imports

class TestsAlignGaugeLabels {

    //begin eventHandler
    fun testsAlignGaugeLabels(sender: Any?, args: IgaAlignLinearGraphLabelEventArgs) {
        args.offsetX = 15.0;
		args.offsetY = 12.0;
    }
    //end eventHandler

}
