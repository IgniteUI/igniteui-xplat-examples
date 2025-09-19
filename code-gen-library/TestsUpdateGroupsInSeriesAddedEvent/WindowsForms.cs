//begin imports
using Infragistics.Win.DataVisualization;
using Infragistics.Win.Description;
//end imports

public class TestsUpdateGrpupsInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    int groupIndex = 0;
  public void TestsUpdateGroupsInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
  {
    var parser = new JsonDictionaryParser();
    object o = CodeGenHelper.FindByName<object>("SeriesAddedGroups");
    var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
    var updateAnnotations = (bool)(obj["includeAnnotations"] as JsonDictionaryValue).Value;
    var seriesGroups = (JsonDictionaryArray)obj["names"];
    List<string> groups = new List<string>();
    foreach (var item in seriesGroups.Items)
    {
      groups.Add(((JsonDictionaryValue)item).Value as String);
    }

    if (args.Series.IsAnnotationLayer && !updateAnnotations) {
      return;
    }

    if (groupIndex >= groups.Count)
      groupIndex = 0;
    if (groups.Contains(args.Series.DataLegendGroup))
      return; // already set
    args.Series.DataLegendGroup = groups[groupIndex++];
  }
    //end eventHandler
}