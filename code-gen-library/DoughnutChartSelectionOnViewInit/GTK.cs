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
        // The readout opens with the first slice's figures, so it has something to say before the
        // reader clicks. It is not selected as well, the way the web platforms select it: a ring
        // series has no slice selection to ask for here -- the collection is on the chart and holds
        // slices rather than their indexes -- so what the topic teaches, the click and the styling
        // it applies, is what this shows. The rest waits for the API to match.
        var series = CodeGenHelper.FindByName<RingSeries>("ringSeries");
        DoughnutChartSelectionReadout.Show(
            series,
            CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("SelectedSlice"),
            0);
    }
    //end eventHandler
}
