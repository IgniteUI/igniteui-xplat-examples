//begin imports
import UIKit;
//end imports

public class TestsDataLegendStyleHeaderRed {

    //begin eventHandler
    public func testsDataLegendStyleHeaderRed(sender: Any?, args: IgsDataLegendStylingRowEventArgs?) {
        args!.titleTextColor = IgsSolidColorBrush(UIColor.red)
    }
    //end eventHandler
}
