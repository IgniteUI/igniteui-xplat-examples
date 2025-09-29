//begin imports
//end imports

public class TestsDataLegendCalcSummaryAdd100WDetails {

    //begin eventHandler
    public func testsDataLegendCalcSummaryAdd100WDetails(sender: Any?, args: IgsDataLegendSummaryEventArgs?) {
        var total = 100.0
        for value in args!.columnValues ?? [] {
            total += value
        }
        args!.summaryValue = total
        args!.summaryLabel = "A:"
        args!.summaryUnits = "S+100"
    }
    //end eventHandler
}
