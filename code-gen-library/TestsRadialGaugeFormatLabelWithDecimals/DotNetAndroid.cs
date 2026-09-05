//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class TestsRadialGaugeFormatLabelWithDecimals
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatRadialGaugeLabelHandler
    public void TestsRadialGaugeFormatLabelWithDecimals(object sender, FormatRadialGaugeLabelEventArgs args)
    {									
		
		args.Label = args.Value.ToString("F3"); 
			
    }
    //end eventHandler
}