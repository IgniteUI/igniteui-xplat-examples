//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridDeselectAllRows {
    //begin eventHandler
    public dataGridDeselectAllRows(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.deselectAllRows();
    }
    //end eventHandler
}
