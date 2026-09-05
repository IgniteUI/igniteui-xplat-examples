//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using System.Collections.Generic;
using Android.Widget;
//end imports

public class TestsAddNameTooltip
{
    //begin eventHandler
    //WPF: System.Action
    public void TestsAddNameTooltip()
    {
        var chart = CodeGenHelper.GetDescription<DataChartView>("content");
        foreach (var series in chart.Series)
        {
            if (!series.IsLayer)
            {
                series.ChartToolTipUpdating += (sender, args) =>
                {
                    var cv = args.CurrentView;
                    if (cv == null)
                    {
                        var tv = new TextView(chart.Context);
                        cv = tv;
                        args.CurrentView = cv;
                    }
                    var item = args.CurrentData.Item as IDictionary<string, object>;
                    if (item != null && item.ContainsKey("Name"))
                    {
                        ((TextView)cv).Text = item["Name"] as string;
                    }
                };
            }
        }
    }
    //end eventHandler

}
