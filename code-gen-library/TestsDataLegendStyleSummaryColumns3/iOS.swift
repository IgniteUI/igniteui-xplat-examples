//begin imports
//end imports

class TestsDataLegendStyleSummaryColumns3 {

    //begin eventHandler
    func testsDataLegendStyleSummaryColumns3(sender: Any?, args: IgsDataLegendStylingColumnEventArgs) {
        switch args.valueMemberPath {
        case "Open", "[Open]":
            args.valueTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0)) // Green
        case "High", "[High]":
            args.valueTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Low", "[Low]":
            args.valueTextColor = IgsSolidColorBrush(UIColor(red: 255/255.0, green: 165/255.0, blue: 0/255.0, alpha: 1.0)) // Orange
        case "Close", "[Close]":
            args.valueTextColor = IgsSolidColorBrush(UIColor.red)
        default:
            break
        }
    }
    //end eventHandler

}
