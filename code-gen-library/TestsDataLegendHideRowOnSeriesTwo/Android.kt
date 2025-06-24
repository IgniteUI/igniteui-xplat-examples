//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
//end imports

class TestsDataLegendHideRowOnSeriesTwo {

    //begin eventHandler
    fun testsDataLegendHideRowOnSeriesTwo(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        if (args.seriesTitle == "Two") {
            args.isRowVisible = false
        }
    }
    //end eventHandler

}