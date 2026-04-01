//begin imports
using Infragistics.Controls.Gauges;
using Infragistics.Win.DataVisualization;
using Infragistics.Win.Description;
//end imports

public class TestsLinearGaugePrependLabels
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Gauges.FormatLinearGraphLabelHandler
    public void TestsLinearGaugePrependLabels(object sender, FormatLinearGraphLabelEventArgs args)
    {													
		object o = CodeGenHelper.FindByName<object>("LabelPrependValue");
		var parser = new JsonDictionaryParser();           
		var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
		var v = (string)(obj["Text"] as JsonDictionaryValue).Value;           
		args.Label = v + args.Value;
			
    }
    //end eventHandler
}