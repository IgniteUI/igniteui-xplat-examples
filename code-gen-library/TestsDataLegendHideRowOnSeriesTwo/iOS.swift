//begin imports
//end imports

public class TestsDataLegendHideRowOnSeriesTwo {

    //begin eventHandler
    public func testsDataLegendHideRowOnSeriesTwo(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        if args!.seriesTitle == "Two" {
            args!.isRowVisible = false
        }
    }
    //end eventHandler
}
