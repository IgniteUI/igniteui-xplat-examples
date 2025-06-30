//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryRows1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryRows1(sender: any,args: DataLegendStylingRowEventArgs)
    {															
		 args.titleText = "The Total";
         let b = new Brush(); b.fill = "Blue";
		 args.titleTextColor = b;
			
    }
    //end eventHandler
}