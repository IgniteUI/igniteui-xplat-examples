//begin imports
import UIKit;
//end imports

class TestsDataLegendStyleSummaryRowsByGroup2 {

    //begin eventHandler
    func testsDataLegendStyleSummaryRowsByGroup2(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        switch args!.groupName {
        case "Group1":
            args!.titleText = "Summary"
            args!.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Group2":
            args!.titleText = "Summary"
            args!.titleTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler

}
