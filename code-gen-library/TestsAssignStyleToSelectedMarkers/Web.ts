//begin imports
import { IgcAssigningCategoryMarkerStyleEventArgs } from "igniteui-webcomponents-charts"; 
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsAssignStyleToSelectedMarkers
{
    //begin eventHandler
    public testsAssignStyleToSelectedMarkers(sender: any,args: IgcAssigningCategoryMarkerStyleEventArgs)
    {
		
            if (args.selectionHighlightingInfo != null)
            {
                
                args.fill = "blue";
                args.stroke = "black";
                args.highlightingHandled = true;
            }
    }
    //end eventHandler
}