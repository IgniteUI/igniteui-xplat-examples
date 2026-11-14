//begin imports
using Infragistics.Controls.Charts;
//end imports

public class PieChartExplosionSliceClick
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.SliceClickEventHandler
    public void PieChartExplosionSliceClick(object sender, SliceClickEventArgs e)
    {
        // Explosion is state the chart keeps for each slice, so a click toggles what the slice
        // already has rather than assigning the chart's exploded list. Selection is cleared so
        // that moving out is the only thing the click does.
        e.IsExploded = !e.IsExploded;
        e.IsSelected = false;
    }
    //end eventHandler
}
