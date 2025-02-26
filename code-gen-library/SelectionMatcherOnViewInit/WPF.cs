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
using System.Windows.Threading;
using Infragistics.Controls.Charts;
using System.Collections;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
	
public class SelectionMatcherOnViewInit
{
    //begin eventHandler
	
	private DispatcherTimer _timer;

	//WPF: System.Action
    public void SelectionMatcherOnViewInit()
	{
		 _timer = new DispatcherTimer();
		_timer.Interval = TimeSpan.FromMilliseconds(100);
		_timer.Tick += (o, e) =>
		{
			AddSelection();
			_timer.Stop();
		};
		_timer.Start();
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