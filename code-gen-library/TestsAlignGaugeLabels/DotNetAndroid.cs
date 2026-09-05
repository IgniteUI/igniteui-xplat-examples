//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class TestsAlignGaugeLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.AlignLinearGraphLabelHandler
    public void TestsAlignGaugeLabels(object sender, AlignLinearGraphLabelEventArgs args)
    {															
		 args.OffsetX  = 15;
		 args.OffsetY  = 12;
			
    }
    //end eventHandler
}