//begin imports
import { AssigningCategoryMarkerStyleEventArgs } from "igniteui-webcomponents-charts"; 
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsAssignStyleToSelectedMarkers
{
    //begin eventHandler
    public testsAssignStyleToSelectedMarkers(sender: any,args: AssigningCategoryMarkerStyleEventArgs)
    {
		
            if (args.selectionHighlightingInfo != null)
            {
                let b1 = new Brush(); b1.fill ="Blue";
                args.fill = b1;
                let b2 = new Brush(); b1.fill ="Black";
                args.stroke = b2;
                args.highlightingHandled = true;
            }
    }
    //end eventHandler
}