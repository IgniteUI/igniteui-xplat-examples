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
		var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
		var data = CodeGenHelper.FindByName<IList>("EnergyRenewableConsumption");    	
		IgbChartSelection selection = new IgbChartSelection();
		selection.Item = data[1];
		IgbSeriesMatcher matcher = new IgbSeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);


		IgbChartSelection selection2 = new IgbChartSelection();
		selection2 = new IgbChartSelection();
		selection2.Item = data[2];

		matcher = new IgbSeriesMatcher();
		matcher.MemberPath = "Wind";
		matcher.MemberPathType = "ValueMemberPath";
		selection2.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection2);
	}
    //end eventHandler
}