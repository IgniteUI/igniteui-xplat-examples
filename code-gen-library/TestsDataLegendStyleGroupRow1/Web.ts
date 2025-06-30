//begin imports
import { DataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts";
import { Brush } from "igniteui-webcomponents-core";

//end imports

export class TestsDataLegendStyleGroupRow1
{
    //begin eventHandler
    public testsDataLegendStyleGroupRow1(sender: any,args: DataLegendStylingRowEventArgs)
    {  
		 	
		 switch (args.groupName)
		 {
			 case "Group1":
				 var b = new Brush(); b.fill = "Blue";
				 args.titleText = "Collection 1";
				 args.titleTextColor = b;
				 break;
			 case "Group2":
				 var r = new Brush(); b.fill = "Red";
				 args.titleText = "Collection 2";
				 args.titleTextColor = r;
				 break;			 
		 }
    }
    //end eventHandler
}