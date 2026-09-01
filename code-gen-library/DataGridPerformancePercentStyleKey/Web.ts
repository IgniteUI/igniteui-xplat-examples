//begin imports
//end imports

export class DataGridPerformancePercentStyleKey {
    //begin eventHandler
    public dataGridPerformancePercentStyleKey(column: any, args: any): void {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }
    //end eventHandler
}
