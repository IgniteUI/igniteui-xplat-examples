//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Gauges;
using Newtonsoft.Json.Linq;
//end imports

public class TestsAddGaugeLabelFormatSpecifier
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddGaugeLabelFormatSpecifier(){
        var gauge = CodeGenHelper.GetDescription<XamLinearGauge>("content");
		var jVal = CodeGenHelper.FindByName<JValue>("GaugeLabelFormatSpecifier");
		var formatterInfo = JObject.Parse(jVal.ToString());
		NumberFormatSpecifier numSpec = new NumberFormatSpecifier();
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

		gauge.LabelFormatSpecifiers = new FormatSpecifier[1] {numSpec};
    }	
    //end eventHandler

}