//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryRows3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleSummaryRows3(object sender, DataLegendStylingRowEventArgs args)
    {															
		 args.TitleText = "TOTAL";
		 args.TitleTextColor = new SolidColorBrush(Colors.Blue);
			
    }
    //end eventHandler
}