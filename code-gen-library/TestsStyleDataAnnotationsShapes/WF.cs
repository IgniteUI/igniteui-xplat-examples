//begin imports
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
//end imports

public class TestsStyleDataAnnotationsShapes
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationShapeStyleEventHandler

    public void TestsStyleDataAnnotationsShapes(object sender, DataAnnotationItem args)
    {         
         object o = CodeGenHelper.FindByName<object>("DataAnnotationShapeStylingOptions");
		 if (o == null) return;
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

	private void StyleShape(JObject options, DataAnnotationItem args)
	{
		var brush = options["Brush"].Value<string>();
		if (!string.IsNullOrEmpty(brush))
				args.ShapeBrush = GetBrush(brush);
		var OutlineBrush = options["OutlineBrush"].Value<string>();
		if (!string.IsNullOrEmpty(OutlineBrush))
				args.ShapeOutline = GetBrush(OutlineBrush);
		var Thickness = options["Thickness"].Value<string>();
		if (Thickness != "NaN")
				args.ShapeThickness = options["Thickness"].Value<double>();
		
	}
	private Infragistics.Win.DataVisualization.Brush GetBrush(string color)
	{
		if (color == null || color == "")
			return null;
		try
		{
			Infragistics.Win.DataVisualization.Design.BrushConverter converter = new Infragistics.Win.DataVisualization.Design.BrushConverter();
			return (Infragistics.Win.DataVisualization.Brush)converter.ConvertFromString(color);
		}
		catch (Exception)
		{
			return null;
		}

	}
    //end eventHandler
}