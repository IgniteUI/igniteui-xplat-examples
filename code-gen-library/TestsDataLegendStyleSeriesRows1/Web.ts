//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSeriesRows1
{
    //begin eventHandler
    public testsDataLegendStyleSeriesRows1(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {  																	
		 switch (args.seriesTitle)
		 {
			 case "One":
				 args.titleText = "Series1";
				 args.titleTextColor = "blue";
				 break;
			 case "Two":
				 args.titleText = "Series2";
				 args.titleTextColor = "red";
				 break;
			 case "Three":
				 args.titleText = "Series3";
				 args.titleTextColor = "green";
				 break;
		 }
    }
    //end eventHandler
}