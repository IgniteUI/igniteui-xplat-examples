//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSummaryRows3
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSummaryRows3(sender:any,args: DataLegendStylingRowEventArgs)
    {															
		 args.titleText = "TOTAL";
         let b = new Brush(); b.fill = "Blue";
		 args.titleTextColor = b;
			
    }
    //end eventHandler
}