//begin eventHandler
registerScript("OnBoundToRowIndex", (s, args) => {
    args.cellInfo.renderValue = args.cellInfo.dataRow;
});
//end eventHandler
