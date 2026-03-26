//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateBadgeModeInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    public void TestsUpdateBadgeModeInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
          args.Series.LegendItemBadgeMode = Infragistics.Controls.LegendItemBadgeMode.MatchSeries;

    }
    //end eventHandler
}
