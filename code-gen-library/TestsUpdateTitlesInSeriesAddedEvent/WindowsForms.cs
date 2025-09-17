//begin imports
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
using Infragistics.Win.Description;
//end imports

public class TestsUpdateTitlesInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int titleIndex = 0;
    public void TestsUpdateTitlesInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
		var parser = new JsonDictionaryParser();
		object o = CodeGenHelper.FindByName<object>("SeriesAddedTitles");
		var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
		var updateAnnotations = (bool)(obj["includeAnnotations"] as JsonDictionaryValue).Value;
      
	  	var seriesTitles = (JsonDictionaryArray)obj["names"];
		List<string> names = new List<string>();
		foreach (var item in seriesTitles.Items) {
          names.Add(((JsonDictionaryValue)item).Value as String);
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