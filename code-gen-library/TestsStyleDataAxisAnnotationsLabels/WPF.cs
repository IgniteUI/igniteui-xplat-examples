//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;
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
		 var parser = new JsonDictionaryParser();
		 var array = (JsonDictionaryArray)parser.Parse((string)((JsonDictionaryValue)o).Value);
		 
		 for (int i=0;i<array.Items.Length;i++)
		 {
			 var item = (JsonDictionaryObject)array.Items[i];
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

	private void StyleShape(JsonDictionaryObject options, DataAnnotationInfo args)
	{
		var background = options.GetString("Background");
		if (background != "")
			args.Background = GetBrush(background);
		var borderColor = options.GetString("BorderColor");
		if (borderColor != null)
			args.BorderColor = GetBrush(borderColor);
		var TextColor = options.GetString("TextColor");
		if (TextColor != null)
			args.TextColor = GetBrush(TextColor);
		var BorderThickness = options.GetString("BorderThickness");
		if (BorderThickness != "NaN")
			args.BorderThickness = options.GetNumber("BorderThickness");
		var BorderRadius = options.GetString("BorderRadius");
		if (BorderRadius != "NaN")
			args.BorderRadius = options.GetNumber("BorderRadius");
		var XAxisLabel = options.GetString("XAxisLabel");
		if (!string.IsNullOrEmpty(XAxisLabel))
			args.XAxisLabel = XAxisLabel;
		var YAxisLabel = options.GetString("YAxisLabel");
		if (!string.IsNullOrEmpty(YAxisLabel))
			args.YAxisLabel = YAxisLabel;

	}
	private Brush GetBrush(string color)
	{
		if (color == null || color == "")
			return null;
		try
		{
			BrushConverter converter = new BrushConverter();
			return (Brush)converter.ConvertFromString(color);
		}
		catch (Exception)
		{
			return null;
		}

	}
    //end eventHandler
}
