//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class DoughnutChartSelectionSliceClick
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.SliceClickEventHandler
    public void DoughnutChartSelectionSliceClick(object sender, SliceClickEventArgs e)
    {
        // A click that selects reports which slice; a click that clears the selection reports that.
        DoughnutChartSelectionReadout.Show(
            CodeGenHelper.FindByName<RingSeries>("ringSeries"),
            CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("SelectedSlice"),
            e.IsSelected ? e.Index : -1);
    }
    //end eventHandler
}
