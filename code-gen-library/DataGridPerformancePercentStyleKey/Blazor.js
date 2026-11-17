//begin eventHandler
registerScript("DataGridPerformancePercentStyleKey", (column, args) => {
    if (args.resolvedValue >= 0) {
        args.styleKey = "pricePercentUp";
    } else {
        args.styleKey = "pricePercentDown";
    }
});
//end eventHandler
