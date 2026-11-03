//begin imports
//end imports

export class DataGridPerformanceKpiStyleKey {
    //begin eventHandler
    public dataGridPerformanceKpiStyleKey(column: any, args: any): void {
        const value = args.resolvedValue;
        if (value < 20.0) {
            args.styleKey = "kpi_red";
        } else if (value > 80.0) {
            args.styleKey = "kpi_green";
        }
    }
    //end eventHandler
}
