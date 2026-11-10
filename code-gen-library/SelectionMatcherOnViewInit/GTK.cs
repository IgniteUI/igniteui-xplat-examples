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
		// Shared by the category chart and data chart samples, which bind the same data.
		var content = CodeGenHelper.GetDescription<object>("content");
		var data = CodeGenHelper.FindByName<IList>("EnergyRenewableConsumption");
		ChartSelectedItemCollection selectedItems;
		if (content is XamCategoryChart categoryChart)
		{
			selectedItems = categoryChart.SelectedSeriesItems;
		}
		else
		{
			selectedItems = ((XamDataChart)content).SelectedSeriesItems;
		}

		ChartSelection selection = new ChartSelection();
		selection.Item = data[1];
		SeriesMatcher matcher = new SeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		selectedItems.Add(selection);

		SeriesMatcher matcher2 = new SeriesMatcher();
		ChartSelection selection2 = new ChartSelection();
		selection2.Item = data[2];
		matcher2.MemberPath = "Wind";
		matcher2.MemberPathType = "ValueMemberPath";

		selection2.Matcher = matcher2;

		selectedItems.Add(selection2);
	}
    //end eventHandler
}
