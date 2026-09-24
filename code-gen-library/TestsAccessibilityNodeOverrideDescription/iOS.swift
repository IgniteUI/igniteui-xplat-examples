//begin imports
//end imports

public class TestsAccessibilityNodeOverrideDescription {
    //begin eventHandler
    public func testsAccessibilityNodeOverrideDescription(sender: Any?, args: IgsAccessibilityNodeCreatingEventArgs?) {
        guard let node = args?.node, node.role == IgsAccessibilityRole.item else { return }
        node.descriptionText = "custom override"
    }
    //end eventHandler
}
