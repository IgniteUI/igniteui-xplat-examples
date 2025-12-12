//begin imports
import { IgcDataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts";

//end imports

export class TestsDataLegendStyleGroupRow1
{
    //begin eventHandler
    public testsDataLegendStyleGroupRow1(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {  
		 	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "Collection 1";
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleText = "Collection 2";
				 args.titleTextColor = "red";
				 break;			 
		 }
    }
    //end eventHandler
}