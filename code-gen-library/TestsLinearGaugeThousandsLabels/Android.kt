//begin imports
import com.infragistics.mobile.controls.IgaFormatLinearGraphLabelEventArgs
import com.infragistics.mobile.controls.NumberUtil

//end imports

class TestsLinearGaugeThousandsLabels {

    //begin eventHandler
    fun testsLinearGaugeThousandsLabels(sender: Any?, args: IgaFormatLinearGraphLabelEventArgs) {
	   
		var value = args.value
		if (args.value > 1000) {
			value = args.value / 1000
		}
		args.label = "$${NumberUtil.doubleToMinDecimalsString(value)} K"
    }
    //end eventHandler

}
