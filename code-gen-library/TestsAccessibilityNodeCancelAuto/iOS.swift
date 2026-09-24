//begin imports
//end imports

public class TestsAccessibilityNodeCancelAuto {
    //begin eventHandler
    public func testsAccessibilityNodeCancelAuto(sender: Any?, args: IgsAccessibilityNodeCreatingEventArgs?) {
        guard let node = args?.node, node.role == IgsAccessibilityRole.item else { return }
        node.descriptionText = ""
        args!.cancelAuto = true
    }
    //end eventHandler
}
