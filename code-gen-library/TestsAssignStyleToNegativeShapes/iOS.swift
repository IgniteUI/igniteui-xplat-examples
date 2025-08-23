//begin imports
//end imports

public class TestsAssignStyleToNegativeShapes {

    //begin eventHandler
    public func testsAssignStyleToNegativeShapes(sender: Any?, args: IgsAssigningCategoryStyleEventArgs) {
        if args.selectionHighlightingInfo != nil && args.isNegativeShape {
            args.fill = IgsSolidColorBrush(UIColor.blue)
            args.stroke = IgsSolidColorBrush(UIColor.black)
            args.highlightingHandled = true
        }
    }
    //end eventHandler
}
