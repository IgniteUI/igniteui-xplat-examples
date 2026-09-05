//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryColumns3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public void TestsDataLegendStyleSummaryColumns3(object sender, DataLegendStylingColumnEventArgs args)
    {    
		switch(args.ValueMemberPath)
		{
			case "Open":
			case "[Open]":
				args.ValueTextColor = new SolidColorBrush(Colors.Green);
				break;	
			case "High":
			case "[High]":
				args.ValueTextColor = new SolidColorBrush(Colors.Blue);
				break;	
			case "Low":
			case "[Low]":
				args.ValueTextColor = new SolidColorBrush(Colors.Orange);
				break;	
			case "Close":
			case "[Close]":
				args.ValueTextColor = new SolidColorBrush(Colors.Red);
				break;	
		}
       
    }
    //end eventHandler
}