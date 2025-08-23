//begin imports
//end imports

public class TestsDataLegendStyleSeriesColumns1 {

    //begin eventHandler
    public func testsDataLegendStyleSeriesColumns1(sender: Any?, args: IgsDataLegendStylingColumnEventArgs) {
        switch args.seriesTitle {
        case "One":
            args.labelText = "Value"
            args.labelTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
            args.valueText = "+25.000"
            args.valueTextColor = IgsSolidColorBrush(UIColor.red)
        case "Two":
            args.labelText = "Value"
            args.labelTextColor = IgsSolidColorBrush(UIColor.blue)
            args.valueText = "+10.000"
            args.valueTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
        case "Three":
            args.labelText = "Value"
            args.labelTextColor = IgsSolidColorBrush(UIColor.red)
            args.valueText = "+20.000"
            args.valueTextColor = IgsSolidColorBrush(UIColor.blue)
        default:
            break
        }
    }
    //end eventHandler
}
