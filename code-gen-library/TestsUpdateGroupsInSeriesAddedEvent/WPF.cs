//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateGrpupsInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int groupIndex = 0;
    public void TestsUpdateGroupsInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {         
        List<string> groups;
        object o = CodeGenHelper.FindByName<object>("SeriesAddedGroups");
        if (o is JsonDictionaryValue)
        {
            var parser = new JsonDictionaryParser();
            var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
            var updateAnnotations = (bool)(obj["includeAnnotations"] as JsonDictionaryValue).Value;
            var seriesGroups = (JsonDictionaryArray)obj["names"];
            groups = new List<string>();
            foreach (var item in seriesGroups.Items)
            {
                groups.Add(((JsonDictionaryValue)item).Value as String);
            }

            if (args.Series.IsAnnotationLayer && !updateAnnotations)
            {
                return;
            }
        }
        else
        {
            JObject obj =  JObject.Parse(o.ToString());
            bool updateAnnotations = obj["includeAnnotations"].ToObject<bool>();
            var seriesGroups = (JArray) obj["names"];
            groups = seriesGroups.ToObject<List<string>>();
        }
        	
		if (groupIndex >= groups.Count)
            groupIndex = 0;
		if (groups.Contains(args.Series.DataLegendGroup))
			return; // already set
		args.Series.DataLegendGroup = groups[groupIndex++];
    }
    //end eventHandler
}