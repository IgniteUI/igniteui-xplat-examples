//begin imports
import { IgcSliceClickEventArgs, IgcRingSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the DoughnutChartSelectionUtility supporting item, which this item requires.
import { DoughnutChartSelectionReadout } from '../DoughnutChartSelectionUtility/Web';

export class DoughnutChartSelectionSliceClick {

    //begin eventHandler
    public doughnutChartSelectionSliceClick(sender: any, args: IgcSliceClickEventArgs): void {
        // A click that selects reports which slice; a click that clears the selection reports that.
        DoughnutChartSelectionReadout.show(
            CodeGenHelper.findByName<IgcRingSeriesComponent>("ringSeries"),
            CodeGenHelper.findByName<any>("SelectedSlice"),
            args.isSelected ? args.index : -1);
    }
    //end eventHandler
}
