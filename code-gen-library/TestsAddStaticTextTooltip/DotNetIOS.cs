//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using UIKit;
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
            categoryChart.SeriesAdded += (sender, args) => AddStaticTextTooltip(args.Series);
            foreach (var series in categoryChart.DataChart.Series)
            {
                AddStaticTextTooltip(series);
            }
            return;
        }
        var chart = (DataChartView)content;
        foreach (var series in chart.Series)
        {
            AddStaticTextTooltip(series);
        }
    }

    private void AddStaticTextTooltip(Series series)
    {
        if (!series.IsLayer)
        {
            series.ChartToolTipUpdating += (sender, args) =>
            {
                var cv = args.CurrentView;
                if (cv == null)
                {
                    var tv = new UILabel();
                    cv = tv;
                    args.CurrentView = cv;
                }
                ((UILabel)cv).Text = "text";
            };
        }
    }
    //end eventHandler

}
