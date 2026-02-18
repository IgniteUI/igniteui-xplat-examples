//begin imports
//begin imports
import { IgcDataAnnotationInfo } from "igniteui-webcomponents-charts";
//end imports

public class TestsStyleAxisAnnotationsLabels
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationLabelStyleEventHandler
    int groupIndex = 0;
    public void TestsStyleAxisAnnotationsLabels(sender: any, args: IgcDataAnnotationInfo)
    {         
         object o = CodeGenHelper.findByName<object>("AxisAnnotationStlingOtions");
		 if (o === undefined)
			return;
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
		
		if (options.Background !== undefined && background != "")
			args.background = background;
		if (options.BorderColor !== undefined)
			args.borderColor = options.BorderColor;
		if (options.TextColor !== undefined)
			args.textColor = options.TextColor;
		if (options.BorderThickness != "NaN")
			args.borderThickness = options.BorderThickness;
		if (options.BorderRadius != "NaN")
			args.borderRadius = options.BorderRadius;
		if (options.XAxisLabel !== undefined && options.XAxisLabel != "")
			args.xAxisLabel = options.XAxisLabel;
		if (options.YAxisLabel !== undefined && options.YAxisLabel != "")
			args.yAxisLabel = options.YAxisLabel;		
	}
    //end eventHandler
}