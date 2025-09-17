//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleHeaderWithCurrent
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleHeaderWithCurrent(object sender, DataLegendStylingRowEventArgs args)
    {
         args.TitleText = "Current:" + args.TitleText;
    }
    //end eventHandler
}