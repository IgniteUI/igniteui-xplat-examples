//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class ToolbarDownloadChart
{
    //begin eventHandler
    public void ToolbarDownloadChart(IgbToolCommandEventArgs args)
	{
		var target = this.chart;
		switch (args.Command.CommandId)
		{
			case "DownloadAsImage":
				JS.InvokeVoidAsync("ToolbarDownloadScript", null);
					break;
		}
	}
    //end eventHandler
}