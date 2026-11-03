//begin imports
//end imports

export class DataGridPerformanceAvgSaleStyleKey {
    //begin eventHandler
    public dataGridPerformanceAvgSaleStyleKey(column: any, args: any): void {
        let row = null;
        if (column.i.grid) {
            row = column.i.grid.actualDataSource.getItemAtIndex(args.rowNumber);
        } else {
            row = column.i.grid.actualDataSource.dataSource[args.rowNumber];
        }
        if (row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }
    //end eventHandler
}
