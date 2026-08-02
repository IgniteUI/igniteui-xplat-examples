//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendHideBadgeOnSeriesTwo
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendHideBadgeOnSeriesTwo(object sender, DataLegendStylingRowEventArgs args)
    {         
		if (args.SeriesTitle == "Two")
			args.IsBadgeVisible = false;
    }
    //end eventHandler
}