//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateGrpupsInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int groupIndex = 0;
    public void TestsUpdateGroupsInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {         
         object o = CodeGenHelper.FindByName<object>("SeriesAddedGroups");
         JObject obj =  JObject.Parse(o.ToString());
		 bool updateAnnotations = obj["includeAnnotations"].ToObject<bool>();
		 var seriesGroups = (JArray) obj["names"];
		 List<string> groups = seriesGroups.ToObject<List<string>>();
				
		if (args.Series.IsAnnotationLayer && !updateAnnotations)
			return;

		if (groupIndex >= groups.Count)
				groupIndex = 0;
		if (groups.Contains(args.Series.DataLegendGroup))
			return; // already set
		args.Series.DataLegendGroup = groups[groupIndex++];
    }
    //end eventHandler
}
