//begin imports
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the DataGridPerformanceTicker supporting item, which this item requires: in a generated sample
// those declarations are written beside the component, so there is no import of them there.
import { DataGridPerformanceTicker } from '../DataGridPerformanceTicker/Web';

export class DataGridPerformanceTickerOnViewInit {

    //begin eventHandler
    /** Starts the sample's ticker once its grid is in place. */
    public dataGridPerformanceTickerOnViewInit(): void {
        CodeGenHelper.getSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").start();
    }
    //end eventHandler
}
