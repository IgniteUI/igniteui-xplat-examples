//begin imports
using Infragistics.Win.DataVisualization;
//end imports

public class TestsAddStaticTextTool
{

    //begin eventHandler
	//WindowsForms: System.Action
    public  void TestsAddStaticTextTooltip(){
		var content = CodeGenHelper.GetDescription<object>("content");
		// A category chart makes its own series, so they get the tooltip as it adds them;
		// any it has already made are reached through its data chart.
		var categoryChart = content as UltraCategoryChart;
		if (categoryChart != null)
		{
			categoryChart.SeriesAdded += (sender, args) => AddStaticTextTooltip(args.Series);
			foreach (var series in categoryChart.DataChart.Series)
			{
				AddStaticTextTooltip(series);
			}
			return;
		}
		var chart = (UltraDataChart)content;
		foreach(var series in chart.Series)
		{
			AddStaticTextTooltip(series);
		}
	}

	private void AddStaticTextTooltip(Series series)
	{
		if (!series.IsLayer)
		{
			series.TooltipContentUpdating += Series_TooltipContentUpdating;
		}
	}

	private System.Windows.Forms.Control Series_TooltipContentUpdating(object sender, ChartTooltipContentEventArgs e)
	{
		Panel panel = e.CurrentContent as Panel;
		if (panel == null )
		{
			panel = new Panel();
			panel.Size = new Size(300, 40);
			Label l = new Label() { Text = "text", Width = 290 };
			panel.Controls.Add(l);
		}
		return panel;
	}
    //end eventHandler

}
