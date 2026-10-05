//begin imports
//end imports

public class TestsAccessibilityNodeAddAction {
    //begin eventHandler
    public func testsAccessibilityNodeAddAction(sender: Any?, args: IgsAccessibilityNodeCreatingEventArgs?) {
        guard let node = args?.node, node.role == IgsAccessibilityRole.item else { return }
        // The getter never returns nil -- it builds a collection over the
        // implementation's on first read -- and adds made through it reach the
        // implementation, so there is nothing to create first.
        let action = IgsAccessibilityAction()
        action.name = "Activate"
        node.actions!.add(item: action)
    }
    //end eventHandler
}
