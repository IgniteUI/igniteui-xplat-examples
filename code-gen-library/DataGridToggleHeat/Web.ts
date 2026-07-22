//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridToggleHeat {
    //begin eventHandler
    public dataGridToggleHeat(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        this.useHeatBackground = !!args.newValue;
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (grid) grid.flush();
    }
    //end eventHandler
}
