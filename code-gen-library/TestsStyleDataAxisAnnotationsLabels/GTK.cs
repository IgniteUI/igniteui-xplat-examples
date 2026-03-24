//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Core.Graphics;
using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
//end imports

public class TestsStyleDataAxisAnnotationsLabels
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationLabelStyleEventHandler

    public void TestsStyleDataAxisAnnotationsLabels(object sender, DataAnnotationInfo args)
    {
         object o = CodeGenHelper.FindByName<object>("AxisAnnotationStlingOtions");
		 if (o == null)
			return;
         JArray array  =  JArray.Parse(o.ToString());

		 for (int i=0;i<array.Count;i++)
		 {
			 var item = (JObject) array[i];
			 var index = item["Index"].Value<int>();
			 if (index == -1)
			 {
				 StyleShape(item,args);
				 return;
			 }
			 if (index == args.DataIndex)
			 {
				 StyleShape(item,args);
				 return;
			 }
		 }
    }

	private void StyleShape(JObject options, DataAnnotationInfo args)
	{
		var background = options["Background"].Value<string>();
		if (background != "")
			args.Background = GetBrush(background);
		var borderColor = options["BorderColor"].Value<string>();
		if (borderColor != null)
			args.BorderColor = GetBrush(borderColor);
		var TextColor = options["TextColor"].Value<string>();
		if (TextColor != null)
			args.TextColor = GetBrush(TextColor);
		var BorderThickness = options["BorderThickness"].Value<string>();
		if (BorderThickness != "NaN")
			args.BorderThickness = options["BorderThickness"].Value<double>();
		var BorderRadius = options["BorderRadius"].Value<string>();
		if (BorderRadius != "NaN")
			args.BorderRadius = options["BorderRadius"].Value<double>();
		var XAxisLabel = options["XAxisLabel"].Value<string>();
		if (!string.IsNullOrEmpty(XAxisLabel))
			args.XAxisLabel = XAxisLabel;
		var YAxisLabel = options["YAxisLabel"].Value<string>();
		if (!string.IsNullOrEmpty(YAxisLabel))
			args.YAxisLabel = YAxisLabel;

	}
	private Brush GetBrush(string color)
	{
		if (color == null || color == "")
			return null;
		try
		{
			Color c;
			if (color.StartsWith("#"))
			{
				string hex = color.Substring(1);
				if (hex.Length == 6)
				{
					byte r = byte.Parse(hex.Substring(0, 2), NumberStyles.HexNumber);
					byte g = byte.Parse(hex.Substring(2, 2), NumberStyles.HexNumber);
					byte b = byte.Parse(hex.Substring(4, 2), NumberStyles.HexNumber);
					c = Color.FromArgb(255, r, g, b);
				}
				else if (hex.Length == 8)
				{
					byte a = byte.Parse(hex.Substring(0, 2), NumberStyles.HexNumber);
					byte r = byte.Parse(hex.Substring(2, 2), NumberStyles.HexNumber);
					byte g = byte.Parse(hex.Substring(4, 2), NumberStyles.HexNumber);
					byte b = byte.Parse(hex.Substring(6, 2), NumberStyles.HexNumber);
					c = Color.FromArgb(a, r, g, b);
				}
				else
				{
					return null;
				}
			}
			else
			{
				var lower = color.ToLowerInvariant();
				switch (lower)
				{
					case "red": c = Colors.Red; break;
					case "green": c = Colors.Green; break;
					case "blue": c = Colors.Blue; break;
					case "black": c = Colors.Black; break;
					case "white": c = Colors.White; break;
					case "yellow": c = Colors.Yellow; break;
					case "orange": c = Colors.Orange; break;
					case "purple": c = Colors.Purple; break;
					case "cyan": c = Colors.Cyan; break;
					case "magenta": c = Colors.Magenta; break;
					case "gray": c = Colors.Gray; break;
					case "transparent": c = Colors.Transparent; break;
					default: return null;
				}
			}
			return new SolidColorBrush(c);
		}
		catch (Exception)
		{
			return null;
		}

	}
    //end eventHandler
}
