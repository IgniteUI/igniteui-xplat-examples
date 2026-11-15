//begin eventHandler
igRegisterScript("TestsAccessibilityNodeOverrideDescription", (sender, args) => {
    if (args.node != null && args.node.role == window.igAccessibility.Role.Item) {
        args.node.descriptionText = "custom override";
    }
}, false);
//end eventHandler
