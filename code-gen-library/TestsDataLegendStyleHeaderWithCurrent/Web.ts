//begin imports
import { DataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts";
//end imports

export class TestsDataLegendStyleHeaderWithCurrent
{
    //begin eventHandler
    public testsDataLegendStyleHeaderWithCurrent(sender: any,args: DataLegendStylingRowEventArgs)
    {
         args.titleText = "Current:" + args.titleText;
    }
    //end eventHandler
}