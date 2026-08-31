//begin imports
using Infragistics.Controls.Charts;
//end imports

public class PieChartSelectionSliceClick
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.SliceClickEventHandler
    public void PieChartSelectionSliceClick(object sender, SliceClickEventArgs e)
    {
        // Selecting a slice also moves it out of the pie, so that the selection the chart is
        // tracking is visible from the shape as well as from the styling.
        e.IsExploded = !e.IsExploded;
        e.IsSelected = true;
    }
    //end eventHandler
}
