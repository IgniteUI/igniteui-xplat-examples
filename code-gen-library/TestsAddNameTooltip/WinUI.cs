//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using System.Collections.Generic;
//end imports

public class TestsAddNameTooltip
{
    //begin eventHandler
    //WPF: System.Action
    public void TestsAddNameTooltip()
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        foreach (var series in chart.Series)
        {
            if (!series.IsLayer)
            {
                series.ChartToolTipUpdating += (sender, args) =>
                {
                    var cv = args.CurrentView;
                    if (cv == null)
                    {
                        var tv = new TextBlock();
                        cv = tv;
                        args.CurrentView = cv;
                    }
                    var item = args.CurrentData.Item as IDictionary<string, object>;
                    if (item != null && item.ContainsKey("Name"))
                    {
                        ((TextBlock)cv).Text = item["Name"] as string;
                    }
                };
            }
        }
    }
    //end eventHandler

}
