//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class TestsAlignGaugeLabels2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.AlignRadialGaugeLabelHandler
    public void TestsAlignGaugeLabels2(object sender, AlignRadialGaugeLabelEventArgs args)
    {															
		 args.OffsetX  = 10;
		 args.OffsetY  = 10;
			
    }
    //end eventHandler
}