//begin imports
import com.infragistics.mobile.controls.AlignRadialGaugeLabelEventArgs
//end imports

class TestsAlignGaugeLabels {

    //begin eventHandler
    fun testsAlignGaugeLabels(sender: Any?, args: AlignRadialGaugeLabelEventArgs) {
        args.offsetX = 15;
		args.offsetY = 12;
    }
    //end eventHandler

}