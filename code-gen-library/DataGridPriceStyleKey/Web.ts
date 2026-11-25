//begin imports
import { IgcDataGridComponent, IgcCellStyleRequestedEventArgs } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPriceStyleKey {
    //begin eventHandler
    public dataGridPriceStyleKey(column: any, args: IgcCellStyleRequestedEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const row: any = grid.actualDataSource.getItemAtIndex(args.rowNumber);
        if (row != null && row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }
    //end eventHandler
}
