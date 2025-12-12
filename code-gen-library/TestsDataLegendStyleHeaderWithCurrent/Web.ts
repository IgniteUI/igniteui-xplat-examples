//begin imports
import { IgcDataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts";
//end imports

export class TestsDataLegendStyleHeaderWithCurrent
{
    //begin eventHandler
    public testsDataLegendStyleHeaderWithCurrent(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {
         args.titleText = "Current:" + args.titleText;
    }
    //end eventHandler
}