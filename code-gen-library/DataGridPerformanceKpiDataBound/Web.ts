//begin imports
//end imports

export class DataGridPerformanceKpiDataBound {
    //begin eventHandler
    public dataGridPerformanceKpiDataBound(sender: any, args: any): void {
        const value = args.resolvedValue;
        if (value < 20.0) {
            if (args.cellInfo.background !== "red") {
                args.cellInfo.background = "#FF134A";
            }
        }
        if (value > 80.0) {
            if (args.cellInfo.background !== "green") {
                args.cellInfo.background = "#4EB862";
            }
        }
    }
    //end eventHandler
}
