//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSeriesRows2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleSeriesRows2(object sender, DataLegendStylingRowEventArgs args)
    {  																	
		 switch (args.SeriesTitle)
		 {
			 case "Financial1":
				 args.TitleText = "F1";
				 args.TitleTextColor = new SolidColorBrush(Colors.Blue);
				 break;
			 case "Financial2":
				 args.TitleText = "F2";
				 args.TitleTextColor = new SolidColorBrush(Colors.Orange);
				 break;
		 }
    }
    //end eventHandler
}