//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridLoadLayout {
    //begin eventHandler
    public dataGridLoadLayout(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        if (!this.savedLayout) return;
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (!grid) return;
        grid.loadLayout(this.savedLayout);
    }
    //end eventHandler
}
