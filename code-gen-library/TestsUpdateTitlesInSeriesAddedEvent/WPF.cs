//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateTitlesInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int titleIndex = 0;
    public void TestsUpdateTitlesInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
		List<string> names;
		bool updateAnnotations;
		object o = CodeGenHelper.FindByName<object>("SeriesAddedTitles");
		if (o is JsonDictionaryValue)
		{
			var parser = new JsonDictionaryParser();
			var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
			updateAnnotations = (bool)(obj["includeAnnotations"] as JsonDictionaryValue).Value;
		
			var seriesTitles = (JsonDictionaryArray)obj["names"];
			names = new List<string>();
			foreach (var item in seriesTitles.Items) {
				names.Add(((JsonDictionaryValue)item).Value as String);
			}
		}
		else
		{
			JObject obj =  JObject.Parse(o.ToString());
			updateAnnotations = obj["includeAnnotations"].ToObject<bool>();
			var seriesTitles = (JArray) obj["names"];
			names = seriesTitles.ToObject<List<string>>();
		}

		if (args.Series.IsAnnotationLayer && !updateAnnotations)
			 return;
		 if (titleIndex >= names.Count)
			 titleIndex = 0;
		 if (names.Contains(args.Series.Title))
			return; // already set
		args.Series.Title = names[titleIndex++];
    }
    //end eventHandler
}