//begin imports
//end imports

export class DataGridPerformanceChangeStyleKey {
    //begin eventHandler
    public dataGridPerformanceChangeStyleKey(column: any, args: any): void {
        if (args.resolvedValue >= 0) {
            args.styleKey = "priceAmountUp";
        } else {
            args.styleKey = "priceAmountDown";
        }
    }
    //end eventHandler
}
