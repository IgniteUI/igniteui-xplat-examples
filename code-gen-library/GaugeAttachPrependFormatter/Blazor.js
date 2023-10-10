//begin eventHandler
igRegisterScript("GaugeAttachPrependFormatter", (args) => {
    args.label = "$" + args.label;
}, false);
//end eventHandler