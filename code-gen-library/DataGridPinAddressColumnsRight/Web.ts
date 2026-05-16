//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent, PinnedPositions } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPinAddressColumnsRight {
    //begin eventHandler
    public dataGridPinAddressColumnsRight(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.pinColumn(grid.actualColumns.item(6), PinnedPositions.Right);
        grid.pinColumn(grid.actualColumns.item(7), PinnedPositions.Right);
        grid.pinColumn(grid.actualColumns.item(8), PinnedPositions.Right);
    }
    //end eventHandler
}
