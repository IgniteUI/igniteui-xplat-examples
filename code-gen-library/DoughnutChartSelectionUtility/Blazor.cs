//begin imports
using IgniteUI.Blazor.Controls;
using System.Collections;
//end imports

//begin supportingTypes
// What the sample reports about the selection, shared by the two entry points: the one that selects
// a slice to start with, and the one that answers a click. Both write the same readout, so the text
// is written in one place.
//
// The series and the field are handed in rather than looked up here. Asking for a description
// expands, where the sample is generated, to the field the component was assigned to -- which only
// means anything inside the component's own instance, so the entry points do the asking.
public static class DoughnutChartSelectionReadout
{
    public static void Show(IgbRingSeries series, IgbPropertyEditorPropertyDescription field, int index)
    {
        var data = series.DataSource as IList;
        if (index < 0 || data == null || index >= data.Count)
        {
            field.PrimitiveValue = "No Selection";
            return;
        }
        var item = (EnergyGlobalDemandItem)data[index];
        field.PrimitiveValue = item.Category + " — " + item.Value + "%";
    }
}
//end supportingTypes
