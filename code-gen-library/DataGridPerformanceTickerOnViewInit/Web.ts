//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the DataGridPerformanceTicker supporting item, which this item requires: in a generated sample
// those declarations are written beside the component, so there is no import of them there.
import { DataGridPerformanceTicker } from '../DataGridPerformanceTicker/Web';

export class DataGridPerformanceTickerOnViewInit {

    //begin eventHandler
    /** Starts the sample's ticker once its grid is in place. */
    public dataGridPerformanceTickerOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        CodeGenHelper.getSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").start(grid);
    }
    //end eventHandler
}
