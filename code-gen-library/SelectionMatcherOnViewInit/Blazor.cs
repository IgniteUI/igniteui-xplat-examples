//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Collections;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

public class SelectionMatcherOnViewInit
{
    //begin eventHandler
	
	private System.Threading.Timer _timer;

    public void SelectionMatcherOnViewInit()
	{
		_timer = new System.Threading.Timer((_) =>
		{
			addSelection();
		}, null, 1000, 0);
		_timer = null;
	}
	
	private void addSelection()
	{
		// Shared by the category chart and data chart samples, which bind the same data.
		var content = CodeGenHelper.GetDescription<object>("content");
		var selectedItems = content is IgbCategoryChart categoryChart
			? categoryChart.SelectedSeriesItems
			: ((IgbDataChart)content).SelectedSeriesItems;
		//var data = (IList)chart.DataSource;	
		var data = CodeGenHelper.FindByName<IList>("EnergyRenewableConsumption"); 
		IgbChartSelection selection = new IgbChartSelection();
		selection.Item = data[1];
		IgbSeriesMatcher matcher = new IgbSeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		selectedItems.Add(selection);

		IgbChartSelection selection2 = new IgbChartSelection();
		selection2 = new IgbChartSelection();
		selection2.Item = data[2];
		IgbSeriesMatcher matcher2 = new IgbSeriesMatcher();
		matcher2 = new IgbSeriesMatcher();
		matcher2.MemberPath = "Wind";
		matcher2.MemberPathType = "ValueMemberPath";
		selection2.Matcher = matcher2;

		selectedItems.Add(selection2);
	}
    //end eventHandler
}