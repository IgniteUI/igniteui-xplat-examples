//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSummaryRowsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRowsByGroup1(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleText = "The Total";
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleText = "The Total";
				 args.titleTextColor = "red";
				 break;
		 }
    }
    //end eventHandler
}