//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DoughnutChartSelectionOnViewInit
{
    //begin eventHandler
    public void DoughnutChartSelectionOnViewInit()
    {
        // The sample opens with a slice already chosen, so the readout has something to say and the
        // selection styling is visible without the reader having to click first.
        var series = CodeGenHelper.FindByName<IgbRingSeries>("ringSeries");
        series.SelectedSlices.Add(0);
        DoughnutChartSelectionReadout.Show(
            series,
            CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("SelectedSlice"),
            0);
    }
    //end eventHandler
}
