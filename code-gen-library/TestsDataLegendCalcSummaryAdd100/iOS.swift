//begin imports
//end imports

public class TestsDataLegendCalcSummaryAdd100 {

    //begin eventHandler
    public func testsDataLegendCalcSummaryAdd100(sender: Any?, args: IgsDataLegendSummaryEventArgs) {
        var total = 100.0
        for value in args.columnValues ?? [] {
            total += value
        }
        args.summaryValue = total
    }
    //end eventHandler
}
