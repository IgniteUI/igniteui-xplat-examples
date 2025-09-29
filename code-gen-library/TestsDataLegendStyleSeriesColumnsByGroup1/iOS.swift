//begin imports
import UIKit;
//end imports

public class TestsDataLegendStyleSeriesColumnsByGroup1 {

    //begin eventHandler
    public func testsDataLegendStyleSeriesColumnsByGroup1(sender: Any?, args: IgsDataLegendStylingColumnEventArgs?) {
        switch args!.groupName {
        case "Group1":
            args!.labelText = "Value"
            args!.labelTextColor = IgsSolidColorBrush(UIColor.blue)
            args!.valueTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Group2":
            args!.labelText = "Value"
            args!.labelTextColor = IgsSolidColorBrush(UIColor.red)
            args!.valueTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler
}
