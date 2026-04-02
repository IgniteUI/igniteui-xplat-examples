//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
using Infragistics.Controls.Description;
//end imports

public class TestsAddDataLegendValueFormatSpecifier
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataLegendValueFormatSpecifier(){
        var parser = new JsonDictionaryParser();
		var legend = CodeGenHelper.GetDescription<XamDataLegend>("secondary");
		var jVal = CodeGenHelper.FindByName<JsonDictionaryValue>("DataLegendValueFormatSpecifier");
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

		legend.ValueFormatSpecifiers = new FormatSpecifier[1] {numSpec};
    }	
    //end eventHandler

}