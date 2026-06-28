//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridShowLastHiddenColumn {
    //begin eventHandler
    public dataGridShowLastHiddenColumn(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        for (let i = grid.actualColumns.count - 1; i >= 0; i--) {
            const col = grid.actualColumns.item(i);
            if (col.isHidden) {
                col.isHidden = false;
                break;
            }
        }
    }
    //end eventHandler
}
