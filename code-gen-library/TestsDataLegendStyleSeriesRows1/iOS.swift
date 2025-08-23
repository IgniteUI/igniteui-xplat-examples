//begin imports
//end imports

class TestsDataLegendStyleSeriesRows1 {

    //begin eventHandler
    func testsDataLegendStyleSeriesRows1(sender: Any?, args: IgsDataLegendStylingRowEventArgs) {
        switch args.seriesTitle {
        case "One":
            args.titleText = "Series1"
            args.titleTextColor = IgsSolidColorBrush(UIColor.blue)
        case "Two":
            args.titleText = "Series2"
            args.titleTextColor = IgsSolidColorBrush(UIColor.red)
        case "Three":
            args.titleText = "Series3"
            args.titleTextColor = IgsSolidColorBrush(UIColor(red: 0 / 255.0, green: 128 / 255.0, blue: 0 / 255.0, alpha: 1.0))
        default:
            break
        }
    }
    //end eventHandler

}
