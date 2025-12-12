//begin imports
//end imports

public class TestsDataLegendStyleHeaderWithCurrent {

    //begin eventHandler
    public func testsDataLegendStyleHeaderWithCurrent(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        args!.titleText = "Current:" + (args!.titleText ?? "")
    }
    //end eventHandler
}
