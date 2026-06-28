//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridHideFirstVisibleColumn {
    //begin eventHandler
    public dataGridHideFirstVisibleColumn(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        for (let i = 0; i < grid.actualColumns.count; i++) {
            const col = grid.actualColumns.item(i);
            if (!col.isHidden) {
                col.isHidden = true;
                break;
            }
        }
    }
    //end eventHandler
}
