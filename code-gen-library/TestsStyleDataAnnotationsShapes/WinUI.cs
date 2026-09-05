//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
using System;
using System.Globalization;
using Windows.UI;
//end imports

public class TestsStyleDataAnnotationsShapes
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationShapeStyleEventHandler

    public void TestsStyleDataAnnotationsShapes(object sender, DataAnnotationItem args)
    {
         object o = CodeGenHelper.FindByName<object>("DataAnnotationShapeStylingOptions");
		 if (o == null) return;
         var parser = new JsonDictionaryParser();
         var array = (JsonDictionaryArray)parser.Parse((string)((JsonDictionaryValue)o).Value);

		 for (int i=0;i<array.Items.Length;i++)
		 {
			 JsonDictionaryObject item = (JsonDictionaryObject)array.Items[i];
			 var index = item.GetNumber("Index");
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

	private void StyleShape(JsonDictionaryObject options, DataAnnotationItem args)
	{
		var brush = options.GetString("Brush");
		if (!string.IsNullOrEmpty(brush))
				args.ShapeBrush = GetBrush(brush);
		var OutlineBrush = options.GetString("OutlineBrush");
		if (!string.IsNullOrEmpty(OutlineBrush))
				args.ShapeOutline = GetBrush(OutlineBrush);
		var Thickness = options.GetString("Thickness");
		if (Thickness != "NaN")
				args.ShapeThickness = options.GetNumber("Thickness");

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
