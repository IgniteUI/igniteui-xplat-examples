//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryColumnsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public void TestsDataLegendStyleSummaryColumnsByGroup1(object sender, DataLegendStylingColumnEventArgs args)
    {         
        switch (args.GroupName)
		{
			case "Group1":			  
				args.LabelText = "Value";
				args.LabelTextColor = new SolidColorBrush(Colors.Blue);
				args.ValueTextColor = new SolidColorBrush(Colors.Blue);
				break;
			case "Group2":
				args.LabelText = "Value";
				args.LabelTextColor = new SolidColorBrush(Colors.Red);
				args.ValueTextColor = new SolidColorBrush(Colors.Red);
			   break;
				 
		}
    }
    //end eventHandler
}