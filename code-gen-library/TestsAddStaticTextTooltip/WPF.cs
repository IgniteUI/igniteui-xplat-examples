//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAddStaticTextTooltip
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddStaticTextTooltip(){
        var content = CodeGenHelper.GetDescription<object>("content");
        // A category chart makes its own series, so they get the tooltip as it adds them;
        // any it has already made are reached through its data chart.
        var categoryChart = content as XamCategoryChart;
        if (categoryChart != null)
        {
            categoryChart.SeriesAdded += (sender, args) => AddStaticTextTooltip(args.Series);
            foreach (var series in categoryChart.DataChart.Series)
            {
                AddStaticTextTooltip(series);
            }
            return;
        }
        var chart = (XamDataChart)content;
        foreach (var series in chart.Series)
        {
            AddStaticTextTooltip(series);
        }
    }

    private void AddStaticTextTooltip(Series series)
    {
        if (!series.IsLayer)
        {
            var textBlock = new TextBlock() { Text = "text" };
            series.ToolTip = textBlock;
        }
    }
    //end eventHandler

}