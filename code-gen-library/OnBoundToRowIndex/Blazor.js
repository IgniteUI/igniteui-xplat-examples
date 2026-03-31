//begin eventHandler
igRegisterScript("OnBoundToRowIndex", (s, args) => {
    args.cellInfo.renderValue = args.cellInfo.dataRow;
}, false);
//end eventHandler
