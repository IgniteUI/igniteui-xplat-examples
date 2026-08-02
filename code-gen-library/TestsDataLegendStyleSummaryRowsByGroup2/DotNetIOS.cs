//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSummaryRowsByGroup2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleSummaryRowsByGroup2(object sender, DataLegendStylingRowEventArgs args)
    {  																	
		 switch (args.GroupName)
		 {
			 case "Group1":
				 args.TitleText = "Summary";
				 args.TitleTextColor = new SolidColorBrush(Colors.Blue);
				 break;
			 case "Group2":
				 args.TitleText = "Summary";
				 args.TitleTextColor = new SolidColorBrush(Colors.Red);
				 break;
		 }
    }
    //end eventHandler
}