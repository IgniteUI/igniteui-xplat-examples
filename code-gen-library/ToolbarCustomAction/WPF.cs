//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Windows.Media;
//end imports

public class ToolbarCustomAction
{
	private void ToolbarCustomAction(object sender, ToolCommandEventArgs e)
	{
		switch (e.Command.CommandId)
		{
			case "ToolbarCustomLegendAction":
				this.Legend.Visibility ^= Visibility.Visible | Visibility.Hidden; break;
			case "ToolbarCustomLinkAction":
				var psi = new ProcessStartInfo
				{
					FileName = "www.infragistics.com",
					UseShellExecute = true
				};
				Process.Start(psi); break;
		}
	}
}