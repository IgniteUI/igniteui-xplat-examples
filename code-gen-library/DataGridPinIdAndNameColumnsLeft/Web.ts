//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent, PinnedPositions } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPinIdAndNameColumnsLeft {
    //begin eventHandler
    public dataGridPinIdAndNameColumnsLeft(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.pinColumn(grid.actualColumns.item(0), PinnedPositions.Left);
        grid.pinColumn(grid.actualColumns.item(1), PinnedPositions.Left);
        grid.pinColumn(grid.actualColumns.item(2), PinnedPositions.Left);
    }
    //end eventHandler
}
