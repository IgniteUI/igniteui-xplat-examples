//begin eventHandler
igRegisterScript("TestsAccessibilityNodeCancelAuto", (sender, args) => {
    if (args.node != null && args.node.role == window.igAccessibility.Role.Item) {
        args.node.descriptionText = "";
        args.cancelAuto = true;
    }
}, false);
//end eventHandler
