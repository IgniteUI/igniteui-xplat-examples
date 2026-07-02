//begin imports
using Infragistics.Controls.Gauges;
using Newtonsoft.Json.Linq;
//end imports

public class TestsLinearGaugePrependLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatLinearGraphLabelHandler
    public void TestsLinearGaugePrependLabels(object sender, FormatLinearGraphLabelEventArgs args)
    {													
		object o = CodeGenHelper.FindByName<object>("LabelPrependValue");
		JObject obj = JObject.Parse(o.ToString());
		var v = obj.GetValue("Text").ToString();
		args.Label = v + args.Value;
			
    }
    //end eventHandler
}