//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class TestsLinearGaugeThousandsLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatLinearGraphLabelHandler
    public void TestsLinearGaugeThousandsLabels(object sender, FormatLinearGraphLabelEventArgs args)
    {		
		var val = args.Value;
		if (args.Value > 1000)
			val = args.Value / 1000;
		args.Label = "$" + val.ToString() + " K";
			
    }
    //end eventHandler
}