//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateTitlesInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int titleIndex = 0;
    public void TestsUpdateTitlesInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
		object o = CodeGenHelper.FindByName<object>("SeriesAddedTitles");
		JObject obj =  JObject.Parse(o.ToString());
		 bool updateAnnotations = obj["includeAnnotations"].ToObject<bool>();
		 var seriesTitles = (JArray) obj["names"];
		 List<string> names = seriesTitles.ToObject<List<string>>();

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
