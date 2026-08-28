//begin imports
import { IgcRingSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

//begin supportingTypes
// What the sample reports about the selection, shared by the two entry points: the one that selects
// a slice to start with, and the one that answers a click. Both write the same readout, so the text
// is written in one place.
export class DoughnutChartSelectionReadout {

    public static show(index: number): void {
        var series = CodeGenHelper.getDescription<IgcRingSeriesComponent>("ringSeries");
        var data = series.dataSource as any[];
        var editor = CodeGenHelper.getDescription<any>("SelectedSlice");
        if (index < 0 || data == null || index >= data.length) {
            editor.primitiveValue = "No Selection";
            return;
        }
        var item = data[index];
        editor.primitiveValue = item.category + " — " + item.value + "%";
    }
}
//end supportingTypes
