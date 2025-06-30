//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSeriesRows2
{
    //begin eventHandler
    public testsDataLegendStyleSeriesRows2(sender:any,args:DataLegendStylingRowEventArgs)
    {  																	
		 switch (args.seriesTitle)
		 {
			 case "Financial1":
				 args.titleText = "F1";
				 let b= new Brush(); b.fill = "Blue";
				 args.titleTextColor = b;
				 break;
			 case "Financial2":
				 let o = new Brush(); o.fill = "Orange";
				 args.titleText = "F2";
				 args.titleTextColor = o;
				 break;
		 }
    }
    //end eventHandler
}