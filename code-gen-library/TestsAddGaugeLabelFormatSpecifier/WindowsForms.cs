//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Gauges;
using Newtonsoft.Json.Linq;
using Infragistics.Win.Description;
//end imports

public class TestsAddGaugeLabelFormatSpecifier
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddGaugeLabelFormatSpecifier(){
        var parser = new JsonDictionaryParser();
		var gauge = CodeGenHelper.GetDescription<XamLinearGauge>("content");
		var jVal = CodeGenHelper.FindByName<JsonDictionaryValue>("GaugeLabelFormatSpecifier");
		var formatterInfo = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)jVal).Value);
		
		NumberFormatSpecifier numSpec = new NumberFormatSpecifier();
		foreach (var prop in formatterInfo.GetKeys())
		{
			switch (prop) {
				case "MaximumFractionDigits":
						numSpec.MaximumFractionDigits = (int)(double)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;
				case "MinimumFractionDigits":
						numSpec.MinimumFractionDigits = (int)(double)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;
				case "MinimumIntegerDigits":
						numSpec.MinimumIntegerDigits = (int)(double)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;
				case "Locale":
						numSpec.Locale = (string)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;
				case "UseGrouping":
						numSpec.UseGrouping = (bool)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;
				case "Style":
						numSpec.Style = (string)(((JsonDictionaryValue)(formatterInfo[prop])).Value);
						break;

			}
		}

		gauge.LabelFormatSpecifiers = new FormatSpecifier[1] {numSpec};
    }	
    //end eventHandler

}