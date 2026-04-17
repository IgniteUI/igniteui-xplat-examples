//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsDataLegendStyleHideSeriesRows
{
    //begin eventHandler
    public testsDataLegendStyleHideSeriesRows(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {  																	
		
				 args.isRowVisible = false;
		
    }
    //end eventHandler
}