//begin eventHandler
igRegisterScript("DataGridPerformancePercentStyleKey", (column, args) => {
    if (args.resolvedValue >= 0) {
        args.styleKey = "pricePercentUp";
    } else {
        args.styleKey = "pricePercentDown";
    }
}, false);
//end eventHandler
