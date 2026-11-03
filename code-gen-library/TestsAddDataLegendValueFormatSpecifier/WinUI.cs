//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
//end imports

public class TestsAddDataLegendValueFormatSpecifier
{

    //begin eventHandler
	//WPF: System.Action
    public void TestsAddDataLegendValueFormatSpecifier()
    {
        var legend = CodeGenHelper.GetDescription<XamDataLegend>("secondary");
        var raw = CodeGenHelper.FindByName<object>("DataLegendValueFormatSpecifier");
        if (raw == null) return;

        // The test framework round-trips the format specifier through JSON: the
        // step handler stores an IGNumberFormatSpecifier in eventData, the
        // WidgetManager serializes it to a JSON string before sending, and the
        // host's ref store/eventData hands it back as a JsonDictionaryValue
        // (Type=StringValue, Value=jsonText) or a JsonDictionaryObject (already
        // parsed). Hosts must not pull in Newtonsoft; use JsonDictionaryParser
        // to materialize the object form on WinUI.
        JsonDictionaryObject info = null;
        if (raw is JsonDictionaryObject directObj)
        {
            info = directObj;
        }
        else
        {
            string jsonText = null;
            if (raw is JsonDictionaryValue jdv && jdv.Type == JsonDictionaryValueType.StringValue)
            {
                jsonText = jdv.Value as string;
            }
            else if (raw is string s)
            {
                jsonText = s;
            }
            if (jsonText != null)
            {
                info = new JsonDictionaryParser().Parse(jsonText) as JsonDictionaryObject;
            }
        }
        if (info == null) return;

        var numSpec = new NumberFormatSpecifier();
        foreach (var key in info.GetKeys())
        {
            switch (key)
            {
                case "MaximumFractionDigits":
                    if (info.HasNumber(key))
                        numSpec.MaximumFractionDigits = (int)info.GetNumber(key);
                    break;
                case "MinimumFractionDigits":
                    if (info.HasNumber(key))
                        numSpec.MinimumFractionDigits = (int)info.GetNumber(key);
                    break;
                case "MinimumIntegerDigits":
                    if (info.HasNumber(key))
                        numSpec.MinimumIntegerDigits = (int)info.GetNumber(key);
                    break;
                case "Locale":
                    if (info.HasString(key))
                        numSpec.Locale = info.GetString(key);
                    break;
                case "UseGrouping":
                    if (info.HasBoolean(key))
                        numSpec.UseGrouping = info.GetBoolean(key);
                    break;
                case "Style":
                    if (info.HasString(key))
                        numSpec.Style = info.GetString(key);
                    break;
            }
        }

        legend.ValueFormatSpecifiers = new FormatSpecifier[1] { numSpec };
    }
    //end eventHandler

}
