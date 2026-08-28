//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Collections;
//end imports

//begin supportingTypes
// What the sample reports about the selection, shared by the two entry points: the one that selects
// a slice to start with, and the one that answers a click. Both write the same readout, so the text
// is written in one place.
public static class DoughnutChartSelectionReadout
{
    public static void Show(int index)
    {
        var series = CodeGenHelper.GetDescription<RingSeries>("ringSeries");
        var editor = CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("SelectedSlice");
        var data = series.ItemsSource as IList;
        if (index < 0 || data == null || index >= data.Count)
        {
            editor.PrimitiveValue = "No Selection";
            return;
        }
        var item = (EnergyGlobalDemandItem)data[index];
        editor.PrimitiveValue = item.Category + " — " + item.Value + "%";
    }
}
//end supportingTypes
