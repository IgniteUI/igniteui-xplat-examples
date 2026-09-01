//begin imports
//end imports

export class DataGridPerformanceAvgSaleDataBound {
    //begin eventHandler
    public dataGridPerformanceAvgSaleDataBound(sender: any, args: any): void {
        const item = args.cellInfo.rowItem;
        if (item == null) return;

        if (item.AvgSaleHeat > 0) {
            const p = +item.AvgSaleHeat;
            const r = 1.0 + (0.0 - 1.0) * p;
            const g = 1.0;
            const b = 1.0 + (0.0 - 1.0) * p;
            const a = 1.0;
            args.cellInfo.background = "rgba(" + Math.round(r * 255.0) + "," + Math.round(g * 255.0) + "," + Math.round(b * 255.0) + "," + a + ")";
        } else if (item.AvgSaleHeat < 0) {
            const p = +item.AvgSaleHeat * -1.0;
            const r = 1.0;
            const g = 1.0 + (0.0 - 1.0) * p;
            const b = 1.0 + (0.0 - 1.0) * p;
            const a = 1.0;
            args.cellInfo.background = "rgba(" + Math.round(r * 255.0) + "," + Math.round(g * 255.0) + "," + Math.round(b * 255.0) + "," + a + ")";
        } else {
            args.cellInfo.background = "white";
        }
    }
    //end eventHandler
}
