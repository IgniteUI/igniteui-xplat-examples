//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridSelectAllRows {
    //begin eventHandler
    public dataGridSelectAllRows(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.selectAllRows();
    }
    //end eventHandler
}
