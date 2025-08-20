//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleSummaryRows3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRows3(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {															
		 args.titleText = "TOTAL";
		 args.titleTextColor = "blue";
			
    }
    //end eventHandler
}