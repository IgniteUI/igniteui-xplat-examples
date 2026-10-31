//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using System.Collections;
using System.Threading;
//end imports

public class SelectionMatcherOnViewInit
{
    //begin eventHandler

	private Timer _timer;

	//WPF: System.Action
    public void SelectionMatcherOnViewInit()
	{
		// The timer fires on a pool thread; the chart can only be touched from the UI thread.
		var dispatcher = Microsoft.UI.Dispatching.DispatcherQueue.GetForCurrentThread();
		_timer = new Timer((state) =>
		{
			dispatcher.TryEnqueue(() => AddSelection());
			_timer.Dispose();
		}, null, 100, Timeout.Infinite);
	}

	private void AddSelection()
	{
		var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
		// Shared by the category chart and data chart samples; only the category chart has ItemsSource.
		var data = (IList)((object)chart is XamCategoryChart categoryChart
			? categoryChart.ItemsSource
			: ((XamDataChart)(object)chart).Series[0].ItemsSource);

		ChartSelection selection = new ChartSelection();
		selection.Item = data[1];
		SeriesMatcher matcher = new SeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);

		SeriesMatcher matcher2 = new SeriesMatcher();
		ChartSelection selection2 = new ChartSelection();
		selection2 = new ChartSelection();
		selection2.Item = data[2];
		matcher2.MemberPath = "Wind";
		matcher2.MemberPathType = "ValueMemberPath";

		selection2.Matcher = matcher2;

		chart.SelectedSeriesItems.Add(selection2);
	}
    //end eventHandler
}
