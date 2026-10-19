//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using Infragistics.Core.Graphics;
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
			// The editor's value is a CSS colour, which GDK parses as the XAML converters do.
			var rgba = new Gdk.RGBA();
			if (rgba.Parse(color.ToString()))
			{
				Series series = target.Series[0];
				series.Brush = new SolidColorBrush(Color.FromArgb(
					(byte)System.Math.Round(rgba.Alpha * 255),
					(byte)System.Math.Round(rgba.Red * 255),
					(byte)System.Math.Round(rgba.Green * 255),
					(byte)System.Math.Round(rgba.Blue * 255)));
			}
		}
	}
	//end eventHandler
}
