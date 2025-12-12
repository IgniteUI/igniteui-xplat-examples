//begin imports
import {IgcDataLegendStylingRowEventArgs} from "igniteui-webcomponents-charts";"
//end imports

export class TestsDataLegendStyleHeaderRed
{
    //begin eventHandler
    public testsDataLegendStyleHeaderRed(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {    
        
        args.titleTextColor = "red";
    }
    //end eventHandler
}