//begin imports
import { IgcAssigningCategoryStyleEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsAssignStyleToNegativeShapes2
{
    //begin eventHandler
    public testsAssignStyleToNegativeShapes2(sender: any,args: IgcAssigningCategoryStyleEventArgs)
    {
		if (args.selectionHighlightingInfo != null && args.isNegativeShape){
			args.fill  = "blue";
    		args.stroke = "black";
    		args.strokeThickness = 2;
    		args.highlightingHandled = true;
		}
    }
    //end eventHandler
}