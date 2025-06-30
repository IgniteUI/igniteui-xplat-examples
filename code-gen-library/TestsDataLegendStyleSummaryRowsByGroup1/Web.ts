//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryRowsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRowsByGroup1(sender:any,args: DataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "The Total";
				 let b= new Brush(); b.fill = "Blue";
				 args.titleTextColor = b;
				 break;
			 case "Group2":
				 args.titleText = "The Total";
				 let r= new Brush(); r.fill = "Red";
				 args.titleTextColor = r;
				 break;
		 }
    }
    //end eventHandler
}