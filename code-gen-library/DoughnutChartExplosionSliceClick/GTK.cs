//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DoughnutChartExplosionSliceClick
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.SliceClickEventHandler
    public void DoughnutChartExplosionSliceClick(object sender, SliceClickEventArgs e)
    {
        // Runs in the host: the chart consumes this event argument synchronously.
        e.IsExploded = !e.IsExploded;
    }
    //end eventHandler
}
