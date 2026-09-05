//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryRows1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleSummaryRows1(object sender, DataLegendStylingRowEventArgs args)
    {															
		 args.TitleText = "The Total";
		 args.TitleTextColor = new SolidColorBrush(Colors.Blue);
			
    }
    //end eventHandler
}