//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSummaryRows2
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRows2(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {															
		 args.titleText = "MySummary";
			
    }
    //end eventHandler
}