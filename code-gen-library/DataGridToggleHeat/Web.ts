//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridToggleHeat {
    //begin emitterOnly
    // useHeatBackground is owned by DataGridLiveDataTickerOnViewInit. The handlers
    // merge into one sample class at sample-emission time; this stub keeps the
    // per-handler library Holder compilable in isolation.
    public useHeatBackground: boolean = true;
    //end emitterOnly

    //begin eventHandler
    public dataGridToggleHeat(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        this.useHeatBackground = !!args.newValue;
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (grid) grid.flush();
    }
    //end eventHandler
}
