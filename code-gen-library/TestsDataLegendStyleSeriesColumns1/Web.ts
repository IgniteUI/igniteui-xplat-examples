//begin imports
import { DataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSeriesColumns1
{
    //begin eventHandler
    public testsDataLegendStyleSeriesColumns1(sender:any,args: DataLegendStylingColumnEventArgs)
    {  
		let g = new Brush(); g.fill = "Green";
		let b = new Brush(); b.fill = "Blue";
		let r = new Brush(); r.fill = "Red";
        switch (args.seriesTitle)
		{
				 case "One":
					args.labelText = "Value";
					args.labelTextColor =g;
					args.valueText = "+25.000";
					args.valueTextColor = r;
			   break;
				 case "Two":
					args.labelText = "Value";
					args.labelTextColor = b;
					args.valueText = "+10.000";
					args.valueTextColor = g;
			   break;
				 case "Three":
					args.labelText = "Value";
					args.labelTextColor = r;
					args.valueText = "+20.000";
					args.valueTextColor = b;
			   break;
		}
    }
    //end eventHandler
}