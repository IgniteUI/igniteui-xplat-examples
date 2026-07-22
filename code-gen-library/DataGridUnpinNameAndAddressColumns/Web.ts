//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent, PinnedPositions } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridUnpinNameAndAddressColumns {
    //begin eventHandler
    public dataGridUnpinNameAndAddressColumns(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.pinColumn(grid.actualColumns.item(0), PinnedPositions.None);
        grid.pinColumn(grid.actualColumns.item(1), PinnedPositions.None);
        grid.pinColumn(grid.actualColumns.item(2), PinnedPositions.None);
        grid.pinColumn(grid.actualColumns.item(6), PinnedPositions.None);
        grid.pinColumn(grid.actualColumns.item(7), PinnedPositions.None);
        grid.pinColumn(grid.actualColumns.item(8), PinnedPositions.None);
    }
    //end eventHandler
}
