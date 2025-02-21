//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Windows.Media;
//end imports

public class ColorEditorToggleSeriesBrush
{
	//begin eventHandler
	//WPF: Infragistics.Controls.Layouts.ToolCommandEventHandler
	public void ColorEditorToggleSeriesBrush(object sender, ToolCommandEventArgs e)
	{
		var target = (XamDataChart)((XamToolbar)sender).Target;
		var color = e.Command.ArgumentsList[0].Value;
		if (e.Command.CommandId == "ToggleSeriesBrush" && target.Series.Count != 0)
		{
			Series series = target.Series[0];
			BrushConverter converter = new BrushConverter();
			series.Brush = (Brush)converter.ConvertFromString(color.ToString());
		}
	}
	//end eventHandler
}