//begin imports
import UIKit;
//end imports

public class TestsDataLegendStyleSeriesColumns2 {

    //begin eventHandler
    public func testsDataLegendStyleSeriesColumns2(sender: Any?, args: IgsDataLegendStylingColumnEventArgs?) {
        switch args!.seriesTitle {
        case "Financial1", "F1":
            switch args!.valueMemberPath {
            case "Open", "[Open]":
                args!.labelText = "Open"
                args!.labelTextColor = IgsSolidColorBrush(UIColor.cyan)
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor.black)
                args!.valueTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
            case "Close", "[Close]":
                args!.labelText = "Close"
                args!.labelTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor.red)
                args!.valueTextColor = IgsSolidColorBrush(UIColor.cyan)
            case "TypicalPrice", "[TypicalPrice]", "TP":
                args!.labelText = "Typical"
                args!.labelTextColor = IgsSolidColorBrush(UIColor.blue)
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
                args!.valueTextColor = IgsSolidColorBrush(UIColor.blue)
            default:
                break
            }

        case "Financial2", "F2":
            switch args!.valueMemberPath {
            case "Open", "[Open]":
                args!.labelText = "Open"
                args!.labelTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor(red: 165/255.0, green: 42/255.0, blue: 42/255.0, alpha: 1.0)) // Brown
                args!.valueTextColor = IgsSolidColorBrush(UIColor.cyan)
            case "Close", "[Close]":
                args!.labelText = "Close"
                args!.labelTextColor = IgsSolidColorBrush(UIColor.cyan)
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor.red)
                args!.valueTextColor = IgsSolidColorBrush(UIColor(red: 0/255.0, green: 128/255.0, blue: 0/255.0, alpha: 1.0))
            case "TypicalPrice", "[TypicalPrice]", "TP":
                args!.labelText = "Typical"
                args!.labelTextColor = IgsSolidColorBrush(UIColor.blue)
                args!.unitsText = "$"
                args!.unitsTextColor = IgsSolidColorBrush(UIColor(red: 128/255.0, green: 0/255.0, blue: 128/255.0, alpha: 1.0)) // Purple
                args!.valueTextColor = IgsSolidColorBrush(UIColor(red: 255/255.0, green: 165/255.0, blue: 0/255.0, alpha: 1.0)) // Orange
            default:
                break
            }

        default:
            break
        }
    }
    //end eventHandler
}
