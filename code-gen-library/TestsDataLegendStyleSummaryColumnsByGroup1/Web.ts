//begin imports
import { DataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryColumnsByGroup1
{
    //begin eventHandler
    public testsDataLegendStyleSummaryColumnsByGroup1(sender:any,args: DataLegendStylingColumnEventArgs)
    {         
        switch (args.groupName)
		{
			case "Group1":			  
				args.labelText = "Value";
				let b = new Brush(); b.fill = "Blue";
				args.labelTextColor = b;
				args.valueTextColor = b;
				break;
			case "Group2":
				args.labelText = "Value";
				let r = new Brush(); r.fill = "Red";
				args.labelTextColor = r;
				args.valueTextColor = r;
			   break;
				 
		}
    }
    //end eventHandler
}