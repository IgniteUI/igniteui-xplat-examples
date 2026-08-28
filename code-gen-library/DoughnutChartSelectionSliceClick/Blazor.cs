//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DoughnutChartSelectionSliceClick
{
    //begin eventHandler
    public void DoughnutChartSelectionSliceClick(IgbSliceClickEventArgs args)
    {
        // A click that selects reports which slice; a click that clears the selection reports that.
        DoughnutChartSelectionReadout.Show(args.IsSelected ? args.Index : -1);
    }
    //end eventHandler
}
