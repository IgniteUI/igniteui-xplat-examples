//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class TestsRadialGaugeFormatLabelWithAllValues
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatRadialGaugeLabelHandler
    public void TestsRadialGaugeFormatLabelWithAllValues(object sender, FormatRadialGaugeLabelEventArgs args)
    {									
		args.Label = String.Format(
                "Value:{0},Angle:{1},StartAngle:{2},EndAngle:{3},ActualMinimumValue:{4},ActualMaximumValue:{5}",
                args.Value,
                Math.Round(args.Angle / Math.PI * 180.0),
                Math.Round(args.StartAngle / Math.PI * 180.0),
                Math.Round(args.EndAngle / Math.PI * 180.0),
                args.ActualMinimumValue,
                args.ActualMaximumValue);
		
			
    }
    //end eventHandler
}