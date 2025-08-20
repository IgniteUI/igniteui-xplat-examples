//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSeriesRows2
{
    //begin eventHandler
    public testsDataLegendStyleSeriesRows2(sender:any,args:IgcDataLegendStylingRowEventArgs)
    {  																	
		 switch (args.seriesTitle)
		 {
			 case "Financial1":
				 args.titleText = "F1";
				 args.titleTextColor = "blue";
				 break;
			 case "Financial2":
				 args.titleText = "F2";
				 args.titleTextColor = "orange";
				 break;
		 }
    }
    //end eventHandler
}