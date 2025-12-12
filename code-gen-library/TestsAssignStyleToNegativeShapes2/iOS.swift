//begin imports
import UIKit;
//end imports

public class TestsAssignStyleToNegativeShapes2 {

    //begin eventHandler
    public func testsAssignStyleToNegativeShapes2(sender: Any?, args: IgsAssigningCategoryStyleEventArgs?) {
        if args!.selectionHighlightingInfo != nil && args!.isNegativeShape {
            args!.fill = IgsSolidColorBrush(UIColor.blue)
            args!.stroke = IgsSolidColorBrush(UIColor.black)
            args!.strokeThickness = 2.0
            args!.highlightingHandled = true
        }
    }
    //end eventHandler
}
