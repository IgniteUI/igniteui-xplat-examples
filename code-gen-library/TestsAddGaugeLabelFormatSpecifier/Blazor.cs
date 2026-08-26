//begin imports
using Newtonsoft.Json.Linq;
using IgniteUI.Blazor.Controls.Description;
//end imports

public class TestsAddGaugeLabelFormatSpecifier
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddGaugeLabelFormatSpecifier(){
        var gauge = CodeGenHelper.GetDescription<IgbLinearGauge>("content");
		// The host returns eventData as a JsonDictionaryValue (TestAppSurface.GetEventData wraps the raw
		// JSON string), and CodeGenHelper.FindByName<T> does a direct (T) cast -- so <JValue> and <string>
		// both throw InvalidCastException. Ask for the JsonDictionaryValue and read .Value.
		var jVal = CodeGenHelper.FindByName<JsonDictionaryValue>("GaugeLabelFormatSpecifier");
		var formatterInfo = JObject.Parse((string)jVal.Value);
		IgbNumberFormatSpecifier numSpec = new IgbNumberFormatSpecifier();
		foreach (var prop in formatterInfo.Properties())
		{
			switch (prop.Name) {
				case "MaximumFractionDigits":
					numSpec.MaximumFractionDigits = (int)prop.Value;
					break;
				case "MinimumFractionDigits":
					numSpec.MinimumFractionDigits = (int)prop.Value;
					break;
				case "MinimumIntegerDigits":
					numSpec.MinimumIntegerDigits = (int)prop.Value;
					break;
				case "Locale":
					numSpec.Locale = prop.Value.ToString();
					break;
				case "UseGrouping":
					numSpec.UseGrouping = (bool)prop.Value;
					break;
				case "Style":
					numSpec.Style = prop.Value.ToString();
					break;
        
			}
		}
        gauge.LabelFormatSpecifiers.Add(numSpec);
    }	
    //end eventHandler

}