//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPinSampleEmployeesOnViewInit {
    //begin eventHandler
    public dataGridPinSampleEmployeesOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const data = CodeGenHelper.findByName<any[]>("employeesSalesData");
        grid.pinnedItems.add(data[2]);
        grid.pinnedItems.add(data[4]);
    }
    //end eventHandler
}