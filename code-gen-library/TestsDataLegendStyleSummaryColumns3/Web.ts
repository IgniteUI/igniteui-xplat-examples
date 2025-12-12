//begin imports
import { IgcDataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSummaryColumns3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public testsDataLegendStyleSummaryColumns3(sender:any,args: IgcDataLegendStylingColumnEventArgs)
    {    
		switch(args.valueMemberPath)
		{
			case "Open":
			case "[Open]":
				
				args.valueTextColor = "green";
				break;	
			case "High":
			case "[High]":
				
				args.valueTextColor = "blue";
				break;	
			case "Low":
			case "[Low]":
				
				args.valueTextColor = "orange";
				break;	
			case "Close":
			case "[Close]":
				
				args.valueTextColor = "red";
				break;	
		}
       
    }
    //end eventHandler
}