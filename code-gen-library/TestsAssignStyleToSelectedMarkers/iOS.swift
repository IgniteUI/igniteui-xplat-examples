//begin imports
import UIKit;
//end imports

public class TestsAssignStyleToSelectedMarkers {

    //begin eventHandler
    public func testsAssignStyleToSelectedMarkers(sender: Any?, args: IgsAssigningCategoryMarkerStyleEventArgs?) {
        if args!.selectionHighlightingInfo != nil {
            args!.fill = IgsSolidColorBrush(UIColor.blue)
            args!.stroke = IgsSolidColorBrush(UIColor.black)
            args!.highlightingHandled = true
        }
    }
    //end eventHandler
}
