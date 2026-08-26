//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendHideRowOnSeriesTwo
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendHideRowOnSeriesTwo(object sender, DataLegendStylingRowEventArgs args)
    {         
		if (args.SeriesTitle == "Two")
			args.IsRowVisible = false;
    }
    //end eventHandler
}