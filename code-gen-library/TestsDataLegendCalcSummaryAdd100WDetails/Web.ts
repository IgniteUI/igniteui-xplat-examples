//begin imports
import { DataLegendSummaryEventArgs } from "igniteui-webcomponents-charts";
//end imports

export class TestsDataLegendCalcSummaryAdd100WDetails
{
    //begin eventHandler
    public testsDataLegendCalcSummaryAdd100WDetails(sender: any,args: DataLegendSummaryEventArgs)
    {															
		let total = 100;

        for (const val of args.columnValues) {
            total += val;
        }
		
		args.summaryValue = total;		
        args.summaryLabel = "A:";
        args.summaryUnits = "S+100";
			
    }
    //end eventHandler
}