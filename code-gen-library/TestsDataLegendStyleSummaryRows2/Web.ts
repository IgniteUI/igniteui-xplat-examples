//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSummaryRows2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRows2(sender:any,args: DataLegendStylingRowEventArgs)
    {															
		 args.titleText = "MySummary";
			
    }
    //end eventHandler
}