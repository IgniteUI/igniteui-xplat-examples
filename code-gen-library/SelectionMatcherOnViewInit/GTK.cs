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
		_timer = new Timer((state) =>
		{
			AddSelection();
			_timer.Dispose();
		}, null, 100, Timeout.Infinite);
	}

	private void AddSelection()
	{
		var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");

		ChartSelection selection = new ChartSelection();
		selection.Item = ((IList)chart.ItemsSource)[1];
		SeriesMatcher matcher = new SeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);

		SeriesMatcher matcher2 = new SeriesMatcher();
		ChartSelection selection2 = new ChartSelection();
		selection2 = new ChartSelection();
		selection2.Item = ((IList)chart.ItemsSource)[1];
		matcher2.MemberPath = "Wind";
		matcher2.MemberPathType = "ValueMemberPath";

		selection.Matcher = matcher2;

		chart.SelectedSeriesItems.Add(selection2);
	}
    //end eventHandler
}
