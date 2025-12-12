//begin imports
import UIKit;
//end imports

class TestsDataLegendStyleSeriesRowsByGroup1 {

    //begin eventHandler
    func testsDataLegendStyleSeriesRowsByGroup1(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        switch args!.groupName {
        case "Group1":
            args!.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Group2":
            args!.titleTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler

}
