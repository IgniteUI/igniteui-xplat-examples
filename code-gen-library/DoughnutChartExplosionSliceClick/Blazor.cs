//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DoughnutChartExplosionSliceClick
{
    //begin eventHandler
    public void DoughnutChartExplosionSliceClick(IgbSliceClickEventArgs args)
    {
        // Runs in the host: the chart consumes this event argument synchronously.
        args.IsExploded = !args.IsExploded;
    }
    //end eventHandler
}
