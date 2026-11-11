//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using System.Collections;
using System.Threading;
//end imports

public class SelectionMatcherOnViewInit
{
    //begin eventHandler


	//WPF: System.Action
    public void SelectionMatcherOnViewInit()
	{
		AddSelection();
	}

	private void AddSelection()
	{
		// Shared by the category chart and data chart samples. A selection matches the chart's own data
		// items, so they are taken from the chart rather than looked up by name.
		var content = CodeGenHelper.GetDescription<object>("content");
		IList data;
		ChartSelectedItemCollection selectedItems;
		if (content is XamCategoryChart categoryChart)
		{
			data = (IList)categoryChart.DataSource;
			selectedItems = categoryChart.SelectedSeriesItems;
		}
		else
		{
			var dataChart = (XamDataChart)content;
			data = (IList)dataChart.Series[0].DataSource;
			selectedItems = dataChart.SelectedSeriesItems;
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
