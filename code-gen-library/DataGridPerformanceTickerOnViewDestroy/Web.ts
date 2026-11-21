//begin imports
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the DataGridPerformanceTicker supporting item, which this item requires: in a generated sample
// those declarations are written beside the component, so there is no import of them there.
import { DataGridPerformanceTicker } from '../DataGridPerformanceTicker/Web';

export class DataGridPerformanceTickerOnViewDestroy {

    //begin eventHandler
    /** Stops the sample's ticker when its view is torn down; started again if the view is. */
    public dataGridPerformanceTickerOnViewDestroy(): void {
        CodeGenHelper.getSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").stop();
    }
    //end eventHandler
}
