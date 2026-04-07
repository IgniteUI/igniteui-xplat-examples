//begin imports
using Infragistics.Controls.Gauges;
using Newtonsoft.Json.Linq;
//end imports

public class TestsRadialGaugeAlignLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.AlignRadialGaugeLabelHandler
    public void TestsRadialGaugeAlignLabels(object sender, AlignRadialGaugeLabelEventArgs args)
    {									
		object o = CodeGenHelper.FindByName<object>("LabelAlignValues");
		JObject obj =  JObject.Parse(o.ToString());
		double x = obj["X"].ToObject<double>();
		double y = obj["Y"].ToObject<double>();
		args.OffsetX = x;
        args.OffsetY = y;
			
    }
    //end eventHandler
}
