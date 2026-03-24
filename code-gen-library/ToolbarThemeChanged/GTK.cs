//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class ToolbarThemeChanged
{
	//begin eventHandler
	//WPF: Infragistics.Controls.Layouts.ToolCommandEventHandler
	public void ToolbarThemeChanged(object sender, ToolCommandEventArgs e)
	{
		var target = CodeGenHelper.GetDescription<XamDataChart>("content");

		switch (e.Command.CommandId)
		{
			case "EnableTooltips":
                Series toRemove = null;
                foreach (var s in target.Series)
                {
                    if (s is DataToolTipLayer)
                    {
                        toRemove = s;
                    }
                }

                if (toRemove == null) {
                    target.Series.Add(new DataToolTipLayer());
                } else {
                    target.Series.Remove(toRemove);
                }
				break;
		}
	}
	//end eventHandler
}
