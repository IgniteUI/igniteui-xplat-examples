//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSeriesRows1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleSeriesRows1(object sender, DataLegendStylingRowEventArgs args)
    {  																	
		 switch (args.SeriesTitle)
		 {
			 case "One":
				 args.TitleText = "Series1";
				 args.TitleTextColor = new SolidColorBrush(Colors.Blue);
				 break;
			 case "Two":
				 args.TitleText = "Series2";
				 args.TitleTextColor = new SolidColorBrush(Colors.Red);
				 break;
			 case "Three":
				 args.TitleText = "Series3";
				 args.TitleTextColor = new SolidColorBrush(Colors.Green);
				 break;
		 }
    }
    //end eventHandler
}