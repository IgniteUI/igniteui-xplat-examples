//begin imports
import { IgcRingSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the DoughnutChartSelectionUtility supporting item, which this item requires.
import { DoughnutChartSelectionReadout } from '../DoughnutChartSelectionUtility/Web';

export class DoughnutChartSelectionOnViewInit {

    //begin eventHandler
    public doughnutChartSelectionOnViewInit(): void {
        // The sample opens with a slice already chosen, so the readout has something to say and the
        // selection styling is visible without the reader having to click first.
        var series = CodeGenHelper.findByName<IgcRingSeriesComponent>("ringSeries");
        series.selectedSlices.add(0);
        DoughnutChartSelectionReadout.show(series, CodeGenHelper.findByName<any>("SelectedSlice"), 0);
    }
    //end eventHandler
}
