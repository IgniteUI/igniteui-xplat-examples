//begin eventHandler
igRegisterScript("DataGridPriceStyleKey", (column, args) => {
    const data = column.i.grid.actualDataSource.dataSource;
    let row = null;
    if (column.i.grid) {
        row = column.i.grid.actualDataSource.getItemAtIndex(args.rowNumber);
    } else {
        row = data[args.rowNumber];
    }
    if (row.Change >= 0) {
        args.styleKey = "priceShiftUp";
    } else {
        args.styleKey = "priceShiftDown";
    }
}, false);
//end eventHandler
