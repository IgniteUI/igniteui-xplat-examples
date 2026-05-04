//begin eventHandler
igRegisterScript("OnBoundToValue", (s, args) => {
    args.cellInfo.renderValue = args.cellInfo.originalValue;
}, false);
//end eventHandler
