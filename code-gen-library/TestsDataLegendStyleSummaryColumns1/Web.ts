//begin imports
import { IgcDataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSummaryColumns1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryColumns1(sender: any,args: IgcDataLegendStylingColumnEventArgs)
    {  
        args.valueTextColor = "red";
    }
    //end eventHandler
}