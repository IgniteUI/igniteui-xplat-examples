//begin imports
//end imports

public class TestsDataLegendStyleGroupRow1 {

    //begin eventHandler
    public func testsDataLegendStyleGroupRow1(sender: Any?, args: IgsDataLegendStylingRowEventArgs) {
        switch args.groupName {
        case "Group1":
            args.titleText = "Collection 1"
            args.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Group2":
            args.titleText = "Collection 2"
            args.titleTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler
}
