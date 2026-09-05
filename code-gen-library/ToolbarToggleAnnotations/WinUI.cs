//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class ToolbarToggleAnnotations
{
	//begin eventHandler
	//WPF: Infragistics.Controls.Layouts.ToolCommandEventHandler
	public void ToolbarToggleAnnotations(object sender, ToolCommandEventArgs e)
	{
		var target = (XamDataChart)((XamToolbar)sender).Target;
		bool enable = false;
        switch (e.Command.CommandId)
		{
			case "EnableTooltips":
				enable = (bool)e.Command.ArgumentsList[0].Value;
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
			case "EnableCrosshairs":
				enable = (bool)e.Command.ArgumentsList[0].Value;
				if (enable)
				{
					target.Series.Add(new CrosshairLayer());
				}
				else
				{
					Series toRemove = null;
					foreach (var s in target.Series)
					{
						if (s is CrosshairLayer)
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
			case "EnableFinalValues":
				enable = (bool)e.Command.ArgumentsList[0].Value;
				if (enable)
				{
					target.Series.Add(new FinalValueLayer());
				}
				else
				{
					Series toRemove = null;
					foreach (var s in target.Series)
					{
						if (s is FinalValueLayer)
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