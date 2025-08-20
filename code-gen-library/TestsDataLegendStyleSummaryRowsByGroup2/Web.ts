//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSummaryRowsByGroup2
{
    //begin eventHandler
    public testsDataLegendStyleSummaryRowsByGroup2(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "Summary";
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleText = "Summary";
				 args.titleTextColor = "red";
				 break;
		 }
    }
    //end eventHandler
}