//begin imports
import { DataLegendSummaryEventArgs } from "igniteui-webcomponents-charts";
//end imports

export class TestsDataLegendCalcSummaryAdd100
{
    //begin eventHandler
    public testsDataLegendCalcSummaryAdd100(sender: any, args: DataLegendSummaryEventArgs)
    {															
		let total = 100;

        for (const val of args.columnValues) {
            total += val;
        }

		args.summaryValue = total;
			
    }
    //end eventHandler
}