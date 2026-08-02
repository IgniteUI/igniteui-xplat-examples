//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSeriesColumns1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public void TestsDataLegendStyleSeriesColumns1(object sender, DataLegendStylingColumnEventArgs args)
    {         
        switch (args.SeriesTitle)
		{
				 case "One":
					args.LabelText = "Value";
					args.LabelTextColor = new SolidColorBrush(Colors.Green);
					args.ValueText = "+25.000";
					args.ValueTextColor = new SolidColorBrush(Colors.Red);
			   break;
				 case "Two":
					args.LabelText = "Value";
					args.LabelTextColor = new SolidColorBrush(Colors.Blue);
					args.ValueText = "+10.000";
					args.ValueTextColor = new SolidColorBrush(Colors.Green);
			   break;
				 case "Three":
					args.LabelText = "Value";
					args.LabelTextColor = new SolidColorBrush(Colors.Red);
					args.ValueText = "+20.000";
					args.ValueTextColor = new SolidColorBrush(Colors.Blue);
			   break;
		}
    }
    //end eventHandler
}