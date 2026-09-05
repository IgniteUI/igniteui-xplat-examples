//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DoughnutChartSelectionOnViewInit
{
    //begin eventHandler
    public void DoughnutChartSelectionOnViewInit()
    {
        // The readout opens with the first slice's figures, so it has something to say before the
        // reader clicks. It is not selected as well, the way Web Components select it: a ring series
        // has no slice selection to ask for here either -- it carries its ring and nothing else -- so
        // what the topic teaches, the click and the styling it applies, is what this shows.
        var series = CodeGenHelper.FindByName<IgbRingSeries>("ringSeries");
        DoughnutChartSelectionReadout.Show(
            series,
            CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("selectedSlice"),
            0);
    }
    //end eventHandler
}
