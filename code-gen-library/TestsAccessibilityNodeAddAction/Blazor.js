//begin eventHandler
igRegisterScript("TestsAccessibilityNodeAddAction", (sender, args) => {
    const types = window.igAccessibility;
    if (args.node != null && args.node.role == types.Role.Item) {
        const action = new types.Action();
        action.name = "Activate";
        args.node.actions.add(action);
    }
}, false);
//end eventHandler
