//begin imports
import { IgcDataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSummaryColumnsByGroup1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryColumnsByGroup1(sender:any,args: IgcDataLegendStylingColumnEventArgs)
    {         
        switch (args.groupName)
		{
			case "Group1":			  
				args.labelText = "Value";
				args.labelTextColor = "blue";
				args.valueTextColor = "blue";
				break;
			case "Group2":
				args.labelText = "Value";
				args.labelTextColor = "red";
				args.valueTextColor = "red";
			   break;
				 
		}
    }
    //end eventHandler
}