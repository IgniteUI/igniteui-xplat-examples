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
        var content = CodeGenHelper.GetDescription<object>("content");
        // A category chart makes its own series, so they get the tooltip as it adds them;
        // any it has already made are reached through its data chart.
        var categoryChart = content as CategoryChartView;
        if (categoryChart != null)
        {
            categoryChart.SeriesAdded += (sender, args) => AddStaticTextTooltip(args.Series, categoryChart.Context);
            foreach (var series in categoryChart.DataChart.Series)
            {
                AddStaticTextTooltip(series, categoryChart.Context);
            }
            return;
        }
        var chart = (DataChartView)content;
        foreach (var series in chart.Series)
        {
            AddStaticTextTooltip(series, chart.Context);
        }
    }

    private void AddStaticTextTooltip(Series series, Android.Content.Context context)
    {
        if (!series.IsLayer)
        {
            series.ChartToolTipUpdating += (sender, args) =>
            {
                var cv = args.CurrentView;
                if (cv == null)
                {
                    var tv = new TextView(context);
                    cv = tv;
                    args.CurrentView = cv;
                }
                ((TextView)cv).Text = "text";
            };
        }
    }
    //end eventHandler

}
