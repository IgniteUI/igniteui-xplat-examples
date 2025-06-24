//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
//end imports

class TestsDataLegendHideBadgeOnSeriesTwo {

    //begin eventHandler
    fun testsDataLegendHideBadgeOnSeriesTwo(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        if (args.seriesTitle == "Two") {
            args.isBadgeVisible = false
        }
    }
    //end eventHandler

}