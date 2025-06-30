//begin imports
import { DataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryColumns3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public testsDataLegendStyleSummaryColumns3(sender:any,args: DataLegendStylingColumnEventArgs)
    {    
		switch(args.valueMemberPath)
		{
			case "Open":
			case "[Open]":
				let g = new Brush(); g.fill = "Green";
				args.valueTextColor = g;
				break;	
			case "High":
			case "[High]":
				let b = new Brush(); b.fill = "Blue";
				args.valueTextColor = b;
				break;	
			case "Low":
			case "[Low]":
				let o = new Brush(); o.fill = "Orange";
				args.valueTextColor = o;
				break;	
			case "Close":
			case "[Close]":
				let r = new Brush(); r.fill = "Red";
				args.valueTextColor = r;
				break;	
		}
       
    }
    //end eventHandler
}