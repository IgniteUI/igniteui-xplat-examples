//begin imports
import { DataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryColumns1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryColumns1(sender: any,args: DataLegendStylingColumnEventArgs)
    {  
        let redBrush = new Brush(); redBrush.fill = "Red";
        args.valueTextColor = redBrush;
    }
    //end eventHandler
}