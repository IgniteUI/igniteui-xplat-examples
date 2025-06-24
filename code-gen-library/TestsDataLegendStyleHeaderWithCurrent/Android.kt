//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
//end imports

class TestsDataLegendStyleHeaderWithCurrent {

    //begin eventHandler
    fun testsDataLegendStyleHeaderWithCurrent(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        args.titleText = "Current:" + args.titleText
    }
    //end eventHandler

}