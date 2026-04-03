//begin imports
using Infragistics.Controls.Gauges;
using Infragistics.Win.Description;
//end imports

public class TestsRadialGaugeAlignLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.AlignRadialGaugeLabelHandler
    public void TestsRadialGaugeAlignLabels(object sender, AlignRadialGaugeLabelEventArgs args)
    {									
		object o = CodeGenHelper.FindByName<object>("LabelAlignValues");
		var parser = new JsonDictionaryParser();
		var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
		double x = (double)(obj["X"] as JsonDictionaryValue).Value;
		double y = (double)(obj["Y"] as JsonDictionaryValue).Value;
		args.OffsetX = x;
        args.OffsetY = y;
			
    }
    //end eventHandler
}
