//begin imports
import com.infragistics.mobile.controls.FormatRadialGaugeLabelEventArgs
//end imports

class TestsRadialGaugeFormatLabelWithDecimals {

    //begin eventHandler
    fun testsRadialGaugeFormatLabelWithDecimals(sender: Any?, args: FormatRadialGaugeLabelEventArgs) {
	   args.label = String.format(java.util.Locale.US, "%.3f", args.value) 
    }
    //end eventHandler

}