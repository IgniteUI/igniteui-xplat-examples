//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class PieChartSelectionSliceClick
{
    //begin eventHandler
    public void PieChartSelectionSliceClick(IgbSliceClickEventArgs args)
    {
        // Selecting a slice also moves it out of the pie, so that the selection the chart is
        // tracking is visible from the shape as well as from the styling.
        args.IsExploded = !args.IsExploded;
        args.IsSelected = true;
    }
    //end eventHandler
}
