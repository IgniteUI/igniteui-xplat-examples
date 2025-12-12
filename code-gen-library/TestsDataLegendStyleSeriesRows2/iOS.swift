//begin imports
import UIKit;
//end imports

class TestsDataLegendStyleSeriesRows2 {

    //begin eventHandler
    func testsDataLegendStyleSeriesRows2(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        switch args!.seriesTitle {
        case "Financial1":
            args!.titleText = "F1"
            args!.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Financial2":
            args!.titleText = "F2"
            args!.titleTextColor = IgsSolidColorBrush(UIColor(red: 255/255.0, green: 165/255.0, blue: 0/255.0, alpha: 1.0)) // Orange
        default:
            break
        }
    }
    //end eventHandler

}
