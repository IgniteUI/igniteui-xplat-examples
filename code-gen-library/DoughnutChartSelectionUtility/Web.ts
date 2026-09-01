//begin imports
import { IgcRingSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

//begin supportingTypes
// What the sample reports about the selection, shared by the two entry points: the one that selects
// a slice to start with, and the one that answers a click. Both write the same readout, so the text
// is written in one place.
//
// The series and the field are handed in rather than looked up here. Asking for a description
// expands, where the sample is generated, to the field the component was assigned to -- which only
// means anything inside the component's own instance, so the entry points do the asking.
export class DoughnutChartSelectionReadout {

    public static show(series: IgcRingSeriesComponent, field: any, index: number): void {
        var data = series.dataSource as any[];
        if (index < 0 || data == null || index >= data.length) {
            field.primitiveValue = "No Selection";
            return;
        }
        var item = data[index];
        field.primitiveValue = item.category + " — " + item.value + "%";
    }
}
//end supportingTypes
