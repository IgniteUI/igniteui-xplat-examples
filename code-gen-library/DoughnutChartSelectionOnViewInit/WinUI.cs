//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class DoughnutChartSelectionOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DoughnutChartSelectionOnViewInit()
    {
        // The sample opens with a slice already chosen, so the readout has something to say and the
        // selection styling is visible without the reader having to click first.
        var series = CodeGenHelper.GetDescription<RingSeries>("ringSeries");
        series.SelectedSlices.Add(0);
        DoughnutChartSelectionReadout.Show(
            series,
            CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("SelectedSlice"),
            0);
    }
    //end eventHandler
}
