//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSeriesRows1
{
    //begin eventHandler
    public testsDataLegendStyleSeriesRows1(sender:any,args: DataLegendStylingRowEventArgs)
    {  																	
		 switch (args.seriesTitle)
		 {
			 case "One":
				let b = new Brush(); b.fill = "Blue";
				 args.titleText = "Series1";
				 args.titleTextColor = b;
				 break;
			 case "Two":
				 let r = new Brush(); r.fill = "Red";
				 args.titleText = "Series2";
				 args.titleTextColor = r;
				 break;
			 case "Three":
				  let g = new Brush(); g.fill = "Green";
				 args.titleText = "Series3";
				 args.titleTextColor = g;
				 break;
		 }
    }
    //end eventHandler
}