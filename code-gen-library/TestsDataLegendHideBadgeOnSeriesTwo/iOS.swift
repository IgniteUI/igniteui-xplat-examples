//begin imports
//end imports

public class TestsDataLegendHideBadgeOnSeriesTwo {

    //begin eventHandler
    public func testsDataLegendHideBadgeOnSeriesTwo(sender: Any?, args: IgsDataLegendStylingRowEventArgs) {
        if args.seriesTitle == "Two" {
            args.isBadgeVisible = false
        }
    }
    //end eventHandler
}
