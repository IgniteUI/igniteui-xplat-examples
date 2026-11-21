//begin imports
using Infragistics.Win.DataVisualization;
//end imports

public class DoughnutChartExplosionSliceClick
{
    //begin eventHandler
    //WindowsForms: Infragistics.Win.DataVisualization.DoughnutSliceClickEventHandler
    public void DoughnutChartExplosionSliceClick(object sender, DoughnutSliceClickEventArgs e)
    {
        // The chart consumes this argument synchronously in the host.
        e.IsExploded = !e.IsExploded;
    }
    //end eventHandler
}
