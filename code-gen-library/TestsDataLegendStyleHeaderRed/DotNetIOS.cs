//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleHeaderRed
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleHeaderRed(object sender, DataLegendStylingRowEventArgs args)
    {         
            args.TitleTextColor = new SolidColorBrush(Colors.Red);
    }
    //end eventHandler
}