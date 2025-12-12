//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSummaryRows1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryRows1(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {															
		 args.titleText = "The Total";
		 args.titleTextColor = "blue";
			
    }
    //end eventHandler
}