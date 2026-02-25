//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Win.Description;
using System;
//end imports

public class TestsStyleDataAnnotationsShapes
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationShapeStyleEventHandler

    public void TestsStyleDataAnnotationsShapes(object sender, DataAnnotationItem args)
    {         
         object o = CodeGenHelper.FindByName<object>("DataAnnotationShapeStylingOptions");
		 if (o == null) return;
        if (o == null)
            return;
        var parser = new JsonDictionaryParser();
        var array = (JsonDictionaryArray)parser.Parse((string)((JsonDictionaryValue)o).Value);

        for (int i = 0; i < array.Items.Length; i++)
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
    private Infragistics.Win.DataVisualization.Brush GetBrush(string color)
    {
        if (color == null || color == "")
            return null;
        try
        {
            var c = ColorTranslator.FromHtml(color);
            return new Infragistics.Win.DataVisualization.SolidColorBrush(c);
        }
        catch (Exception)
        {
            return null;
        }

    }
    //end eventHandler
}