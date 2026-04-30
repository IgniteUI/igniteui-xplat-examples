//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryColumns1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public void TestsDataLegendStyleSummaryColumns1(object sender, DataLegendStylingColumnEventArgs args)
    {         
        args.ValueTextColor = new SolidColorBrush(Colors.Red);
    }
    //end eventHandler
}