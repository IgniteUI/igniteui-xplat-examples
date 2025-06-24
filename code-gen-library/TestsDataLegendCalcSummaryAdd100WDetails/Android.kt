//begin imports
import com.infragistics.mobile.controls.IgaDataLegendSummaryEventArgs
//end imports

class TestsDataLegendCalcSummaryAdd100WDetails {

    //begin eventHandler
    fun testsDataLegendCalcSummaryAdd100WDetails(sender: Any?, args: IgaDataLegendSummaryEventArgs) {
        var total = 100.0
        for (value in args.columnValues!!.toTypedArray()) {
            total += value
        }
        args.summaryValue = total
        args.summaryLabel = "A:"
        args.summaryUnits = "S+100"
    }
    //end eventHandler

}