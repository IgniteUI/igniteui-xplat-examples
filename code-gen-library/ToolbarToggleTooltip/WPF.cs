//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Windows.Media;
//end imports

public class ToolbarToggleTooltip
{
	//begin eventHandler
	//WPF: Infragistics.Controls.Layouts.ToolCommandEventHandler
	public void ToolbarToggleTooltip(object sender, ToolCommandEventArgs e)
	{
		var target = (XamDataChart)((XamToolbar)sender).Target;
		
		switch (e.Command.CommandId)
		{
			case "EnableTooltips":
				var enable = (bool)e.Command.ArgumentsList[0].Value;
				if (enable)
				{
					target.Series.Add(new DataToolTipLayer());
				}
				else
				{
					Series toRemove = null;
					foreach (var s in target.Series)
					{
						if (s is DataToolTipLayer)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.Series.Remove(toRemove);
					}
				}
				break;
		}
	}
	//end eventHandler
}