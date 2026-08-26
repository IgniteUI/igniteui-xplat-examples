//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridReloadSalaryData {
    //begin eventHandler
    public dataGridReloadSalaryData(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const data: any[] = grid.dataSource as any[];
        for (let i = 0; i < data.length; i++) {
            const oldItem = { ...data[i] };
            data[i].Salary = Math.round(60000 + Math.random() * 140000);
            grid.notifySetItem(i, oldItem, data[i]);
        }
    }
    //end eventHandler
}
