//begin imports
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
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