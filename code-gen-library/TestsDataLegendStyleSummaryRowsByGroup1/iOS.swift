//begin imports
import UIKit;
//end imports

class TestsDataLegendStyleSummaryRowsByGroup1 {

    //begin eventHandler
    func testsDataLegendStyleSummaryRowsByGroup1(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        switch args!.groupName {
        case "Group1":
            args!.titleText = "The Total"
            args!.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Group2":
            args!.titleText = "The Total"
            args!.titleTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler

}
