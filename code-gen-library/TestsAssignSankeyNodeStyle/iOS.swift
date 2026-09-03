//begin imports
import UIKit;
//end imports

public class TestsAssignSankeyNodeStyle {
    //begin eventHandler
    public func testsAssignSankeyNodeStyle(sender: Any?, args: IgsAssigningFlowStyleEventArgs?) {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if args!.startIndex == 0 {
            args!.fill = IgsSolidColorBrush(UIColor.purple)
        }
    }
    //end eventHandler
}
