//begin imports
import { IgcDataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSeriesColumns1
{
    //begin eventHandler
    public testsDataLegendStyleSeriesColumns1(sender:any,args: IgcDataLegendStylingColumnEventArgs)
    { 
        switch (args.seriesTitle)
		{
				 case "One":
					args.labelText = "Value";
					args.labelTextColor ="green";
					args.valueText = "+25.000";
					args.valueTextColor = "red";
			   break;
				 case "Two":
					args.labelText = "Value";
					args.labelTextColor = "blue";
					args.valueText = "+10.000";
					args.valueTextColor = "green";
			   break;
				 case "Three":
					args.labelText = "Value";
					args.labelTextColor = "red";
					args.valueText = "+20.000";
					args.valueTextColor = "blue";
			   break;
		}
    }
    //end eventHandler
}