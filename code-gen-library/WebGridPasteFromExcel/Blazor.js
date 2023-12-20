//begin eventHandler
igRegisterScript("WebGridPasteFromExcel", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    var grid = args.target.grid;
    //TODO
}, false);
//end eventHandler