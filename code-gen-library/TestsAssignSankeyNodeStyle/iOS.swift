//begin imports
import UIKit;
//end imports

public class TestsAssignSankeyNodeStyle {
    //begin eventHandler
    public func testsAssignSankeyNodeStyle(sender: Any?, args: IgsAssigningFlowStyleEventArgs?) {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if args!.startIndex == 0 {
            // UIColor.purple is (0.5, 0, 0.5), which quantizes to 127; the other platforms' purple is 128.
            args!.fill = IgsSolidColorBrush(UIColor(red: 128/255.0, green: 0/255.0, blue: 128/255.0, alpha: 1.0))
        }
    }
    //end eventHandler
}
