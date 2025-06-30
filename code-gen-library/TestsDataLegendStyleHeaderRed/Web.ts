//begin imports
import {DataLegendStylingRowEventArgs} from "igniteui-webcomponents-charts";"
import { Brush } from "igniteui-webcomponents-core";
//end imports

export class TestsDataLegendStyleHeaderRed
{
    //begin eventHandler
    public testsDataLegendStyleHeaderRed(sender: any,args: DataLegendStylingRowEventArgs)
    {      
        let b = new Brush(); 
        b.fill = "Red";
        args.titleTextColor = b;
    }
    //end eventHandler
}