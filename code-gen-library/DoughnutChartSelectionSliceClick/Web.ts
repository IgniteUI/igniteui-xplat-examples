//begin imports
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
//end imports

// Declared by the DoughnutChartSelectionUtility supporting item, which this item requires.
import { DoughnutChartSelectionReadout } from '../DoughnutChartSelectionUtility/Web';

export class DoughnutChartSelectionSliceClick {

    //begin eventHandler
    public doughnutChartSelectionSliceClick(sender: any, args: IgcSliceClickEventArgs): void {
        // A click that selects reports which slice; a click that clears the selection reports that.
        DoughnutChartSelectionReadout.show(args.isSelected ? args.index : -1);
    }
    //end eventHandler
}
