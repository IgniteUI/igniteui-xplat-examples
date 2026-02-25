//begin imports
//begin imports
import { IgcDataAnnotationInfo } from "igniteui-webcomponents-charts";
//end imports

public class TestsStyleAxisAnnotationsLabels
{
    //begin eventHandler

    public TestsStyleAxisAnnotationsLabels(sender: any, args: IgcDataAnnotationInfo)
    {         
         let o = CodeGenHelper.findByName<object[]>("AxisAnnotationStlingOtions");
    	 if (o === undefined)
    		return;
        
    		 
    	 for (let i=0;i<o.length;i++)
    	 {
    		 var item = o[i];
    		 var index = item["Index"];
    		 if (index == -1)
    		 {
    			 this.StyleShape(item,args);
    			 return;
    		 }
    		 if (index = args.dataIndex)
    		 {
    			 this.StyleShape(item,args);
    			 return;
    		 }
    	 }
    }
	//private void StyleShape(DataAnnotationLabelStylingOptions options, IGDataAnnotationInfo args)
	private StyleShape(options : any, args: IgcDataAnnotationInfo)
	{
		
		if (options.Background !== undefined && options.Background != "")
			args.background = options.Background;
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