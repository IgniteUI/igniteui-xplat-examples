//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

public class SelectionMatcherOnViewInit
{
    //begin eventHandler
	
	private System.Threading.Timer _timer;

    private void SelectionMatcherOnViewInit()
	{
		_timer = new System.Threading.Timer((_) =>
		{
			addSelection();
		}, null, 100, 0);
	}
	
	private void addSelection()
	{
		var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");

		IgbChartSelection selection = new IgbChartSelection();
		selection.Item = EnergyRenewableConsumption[1];
		IgbSeriesMatcher matcher = new IgbSeriesMatcher();
		matcher.MemberPath = "Solar";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);

		selection = new IgbChartSelection();
		selection.Item = EnergyRenewableConsumption[1];
		matcher = new IgbSeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);
	}
    //end eventHandler
}