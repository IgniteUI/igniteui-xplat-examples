//begin eventHandler
registerScript("DataGridPerformanceChangeStyleKey", (column, args) => {
    if (args.resolvedValue >= 0) {
        args.styleKey = "priceAmountUp";
    } else {
        args.styleKey = "priceAmountDown";
    }
});
//end eventHandler
