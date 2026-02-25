//begin imports
//begin imports
import { IgcDataAnnotationItem } from "igniteui-webcomponents-charts";
//end imports

public class TestsStyleAxisAnnotationsLabels
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.DataAnnotationShapeStyleEventHandler
    
    public testsStyleAxisAnnotationsLabels(sender: any, args: IgcDataAnnotationItem): void {
	    const o: any | undefined = CodeGenHelper.findByName<object>("DataAnnotationShapeStylingOptions");
	    if (o === undefined) return;
	    const array: any[] = JSON.parse(o.toString());
	
	    for (let i = 0; i < array.length; i++) {
	        const item = array[i];
	        const index = item.Index;
	        if (index === -1) {
	            this.styleShape(item, args);
	            return;
	        }
	        if (index === args.dataIndex) {
	            this.styleShape(item, args);
	            return;
	        }
	    }
	}
	
	private styleShape(options: any, args: IgcDataAnnotationInfo): void {
	    if (options.Brush !== undefined && options.brush !== "")
	        args.shapeBrush = options.brush;
	    if (options.outlineBrush !== undefined && options.outlineBrush !== "")
	        args.shapeOutlineBrush = options.outlineBrush;
	    if (options.Thickness !== "NaN")
	        args.shapeThickness = options.thickness;
	}
    //end eventHandler
}
