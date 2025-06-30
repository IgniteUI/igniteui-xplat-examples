//begin imports
import { DataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts"; }
//end imports

export class TestsDataLegendHideBadgeOnSeriesTwo
{
    //begin eventHandler
    public testsDataLegendHideBadgeOnSeriesTwo(sender: any,args: DataLegendStylingRowEventArgs)
    {         
		if (args.seriesTitle == "Two")
			args.isBadgeVisible = false;
    }
    //end eventHandler
}