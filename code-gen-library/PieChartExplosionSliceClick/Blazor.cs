//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class PieChartExplosionSliceClick
{
    //begin eventHandler
    public void PieChartExplosionSliceClick(IgbSliceClickEventArgs args)
    {
        // Explosion is state the chart keeps for each slice, so a click toggles what the slice
        // already has rather than assigning the chart's exploded list. Selection is cleared so
        // that moving out is the only thing the click does.
        args.IsExploded = !args.IsExploded;
        args.IsSelected = false;
    }
    //end eventHandler
}
