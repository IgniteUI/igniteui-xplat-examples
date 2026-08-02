//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Android.Widget;
//end imports

public class TestsAddStaticTextTooltip
{
    //begin eventHandler
    //WPF: System.Action
    public void TestsAddStaticTextTooltip()
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
                    ((TextView)cv).Text = "text";
                };
            }
        }
    }
    //end eventHandler

}
