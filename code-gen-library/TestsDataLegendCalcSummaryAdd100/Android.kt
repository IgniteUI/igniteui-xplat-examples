//begin imports
import com.infragistics.mobile.controls.IgaDataLegendSummaryEventArgs
//end imports

class TestsDataLegendCalcSummaryAdd100 {

    //begin eventHandler
    fun testsDataLegendCalcSummaryAdd100(sender: Any?, args: IgaDataLegendSummaryEventArgs) {
        var total = 100.0
        for (value in args.columnValues!!.toTypedArray()) {
            total += value
        }
        args.summaryValue = total
    }
    //end eventHandler

}