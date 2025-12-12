//begin imports
import { IgcDataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts"; }
//end imports

export class TestsDataLegendHideRowOnSeriesTwo
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendHideRowOnSeriesTwo(sender: any,args: IgcDataLegendStylingRowEventArgs)
    {         
		if (args.seriesTitle == "Two")
			args.isRowVisible = false;
    }
    //end eventHandler
}