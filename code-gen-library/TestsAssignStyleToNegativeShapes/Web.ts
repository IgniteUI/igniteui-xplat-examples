//begin imports
import { AssigningCategoryStyleEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsAssignStyleToNegativeShapes
{
    //begin eventHandler
    public testsAssignStyleToNegativeShapes(sender:any, args: AssigningCategoryStyleEventArgs)
    {
		if (args.selectionHighlightingInfo != null && args.isNegativeShape){
			let b1 = new Brush(); b1.fill ="Blue";
            let b2 = new Brush(); b1.fill ="Black";
            args.fill  = b1;
			args.stroke = b2;
			 args.highlightingHandled = true;
		}
    }
    //end eventHandler
}