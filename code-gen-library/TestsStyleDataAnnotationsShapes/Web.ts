//begin imports
//begin imports
import { IgcDataAnnotationItem } from "igniteui-webcomponents-charts";
//end imports

public class TestsStyleAxisAnnotationsLabels
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationShapeStyleEventHandler
    int groupIndex = 0;
    public void TestsStyleAxisAnnotationsLabels(sender: any, args: IgcDataAnnotationItem)
    {         
         object o = CodeGenHelper.findByName<object>("DataAnnotationShapeStylingOptions");
		 if (o === undefined) return;
         JArray array  =  JArray.Parse(o.ToString());	
		 
		 for (int i=0;i<array.Length;i++)
		 {
			 var item = array[i];
			 var index = item.Index;
			 if (index == -1)
			 {
				 StyleShape(item,args);
				 return;
			 }
			 if (index = args.dataIndex)
			 {
				 StyleShape(item,args);
				 return;
			 }
		 }
    }
	//private void StyleShape(DataAnnotationLabelStylingOptions options, IGDataAnnotationInfo args)
	private StyleShape(options : any, args: IgcDataAnnotationInfo)
	{
		
		if (options.Brush !== undefined && options.Brush != "")
			args.shapeBrush = options.Brush;
		if (options.OutlineBrush !== undefined && options.OutlineBrush != "")
			args.shapeOutlineBrush = options.OutlineBrush;
		if (options.Thickness != "NaN")
			args.shapeThickness = options.Thickness;
				
	}
    //end eventHandler
}