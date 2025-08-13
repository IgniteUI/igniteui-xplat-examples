//begin imports
import { IgcDataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts"; }
//end imports

export class TestsDataLegendHideBadgeOnSeriesTwo
{
    //begin eventHandler
    public testsDataLegendHideBadgeOnSeriesTwo(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {         
		if (args.seriesTitle == "Two")
			args.isBadgeVisible = false;
    }
    //end eventHandler
}