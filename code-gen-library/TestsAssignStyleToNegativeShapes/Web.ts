//begin imports
import { IgcAssigningCategoryStyleEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsAssignStyleToNegativeShapes
{
    //begin eventHandler
    public testsAssignStyleToNegativeShapes(sender:any, args: IgcAssigningCategoryStyleEventArgs)
    {
		if (args.selectionHighlightingInfo != null && args.isNegativeShape){			
            args.fill  = "blue";
			args.stroke = "black";
			 args.highlightingHandled = true;
		}
    }
    //end eventHandler
}