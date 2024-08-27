//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Layouts;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
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
		var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");

		XamChartSelection selection = new XamChartSelection();
		selection.Item = EnergyRenewableConsumption[1];
		XamSeriesMatcher matcher = new XamSeriesMatcher();
		matcher.MemberPath = "Solar";
		matcher.MemberPathType = "ValueMemberPath";
		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);

		selection = new XamChartSelection();
		selection.Item = EnergyRenewableConsumption[1];
		matcher = new XamSeriesMatcher();
		matcher.MemberPath = "Hydro";
		matcher.MemberPathType = "ValueMemberPath";

		selection.Matcher = matcher;

		chart.SelectedSeriesItems.Add(selection);
	}
    //end eventHandler
}