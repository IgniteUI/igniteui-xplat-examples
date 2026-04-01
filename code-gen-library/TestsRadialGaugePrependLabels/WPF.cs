//begin imports
using Infragistics.Controls.Gauges;
using Newtonsoft.Json.Linq;
//end imports

public class TestsRadialGaugePrependLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatRadialGaugeLabelHandler
    public void TestsRadialGaugePrependLabels(object sender, FormatRadialGaugeLabelEventArgs args)
    {													
		object o = CodeGenHelper.FindByName<object>("LabelPrependValue");
		JObject obj = JObject.Parse(o.ToString());
		var v = obj.GetValue("Text").ToString();
		args.Label = v + args.Value;
			
    }
    //end eventHandler
}