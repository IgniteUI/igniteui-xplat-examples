//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryRowsByGroup2
{
    //begin eventHandler
    public testsDataLegendStyleSummaryRowsByGroup2(sender:any,args: DataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "Summary";
				 let b = new Brush(); b.fill = "Blue";
				 args.titleTextColor = b;
				 break;
			 case "Group2":
				 args.titleText = "Summary";
				 let r = new Brush(); r.fill = "Red";
				 args.titleTextColor = r;
				 break;
		 }
    }
    //end eventHandler
}