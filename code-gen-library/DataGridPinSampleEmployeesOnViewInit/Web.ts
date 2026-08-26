//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPinSampleEmployeesOnViewInit {
    //begin eventHandler
    private _timer: ReturnType<typeof setTimeout>;

    public dataGridPinSampleEmployeesOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        this._timer = setTimeout(() => {
            const data = CodeGenHelper.findByName<any[]>("employeesSalesData");
            grid.pinnedItems.add(data[2]);
            grid.pinnedItems.add(data[4]);
        }, 100);
    }
    //end eventHandler
}
