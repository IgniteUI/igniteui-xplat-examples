//begin imports
import { DataLegendStylingRowEventArgs } from "igniteui-webcomponents-charts"; }
//end imports

export class TestsDataLegendHideRowOnSeriesTwo
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendHideRowOnSeriesTwo(sender: any,args: DataLegendStylingRowEventArgs)
    {         
		if (args.seriesTitle == "Two")
			args.isRowVisible = false;
    }
    //end eventHandler
}