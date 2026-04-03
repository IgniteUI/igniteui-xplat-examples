//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsUpdateBadgeModeInSeriesAddedEvent
{
    //begin eventHandler
    //GTK: Infragistics.Controls.Charts.ChartSeriesEventHandler
    public void TestsUpdateBadgeModeInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
          args.Series.LegendItemBadgeMode = LegendItemBadgeMode.MatchSeries;

    }
    //end eventHandler
}

