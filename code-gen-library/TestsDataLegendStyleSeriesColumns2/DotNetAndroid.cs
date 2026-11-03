//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleSeriesColumns2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public void TestsDataLegendStyleSeriesColumns2(object sender, DataLegendStylingColumnEventArgs args)
    {         
        switch (args.SeriesTitle)
{
 		 case "Financial1":
		 case "F1":
       switch (args.ValueMemberPath)
       {
           case "Open":  
           case "[Open]":
               args.LabelText = "Open";
               args.LabelTextColor = new SolidColorBrush(Colors.Cyan);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Black);
               args.ValueTextColor = new SolidColorBrush(Colors.Green);
               break;
           case "Close":
		    case "[Close]":
               args.LabelText = "Close";
               args.LabelTextColor = new SolidColorBrush(Colors.Green);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Red);
               args.ValueTextColor = new SolidColorBrush(Colors.Cyan);
               break;
           case "TypicalPrice":
		   case "[TypicalPrice]":
		   case "TP":
               args.LabelText = "Typical";
               args.LabelTextColor = new SolidColorBrush(Colors.Blue);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Green);
               args.ValueTextColor = new SolidColorBrush(Colors.Blue);
               break;
       }
    			 break;
 		 case "Financial2":
		  case "F2":
       switch (args.ValueMemberPath)
       {
           case "Open":
		   case "[Open]":
               args.LabelText = "Open";
               args.LabelTextColor = new SolidColorBrush(Colors.Green);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Brown);
               args.ValueTextColor = new SolidColorBrush(Colors.Cyan);
               break;
           case "Close":
		   case "[Close]":
               args.LabelText = "Close";
               args.LabelTextColor = new SolidColorBrush(Colors.Cyan);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Red);
               args.ValueTextColor = new SolidColorBrush(Colors.Green);
               break;
           case "TypicalPrice":
		    case "[TypicalPrice]":
			case "TP":
               args.LabelText = "Typical";
               args.LabelTextColor = new SolidColorBrush(Colors.Blue);
               args.UnitsText = "$";
               args.UnitsTextColor = new SolidColorBrush(Colors.Purple);
               args.ValueTextColor = new SolidColorBrush(Colors.Orange);
               break;
       }
       break;
 		 
}
    }
    //end eventHandler
}