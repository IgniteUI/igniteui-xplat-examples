//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendCalcSummaryAdd100WDetails
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendSummaryHandler
    public void TestsDataLegendCalcSummaryAdd100WDetails(object sender, DataLegendSummaryEventArgs args)
    {															
		double total = 100;
		foreach (var val in args.ColumnValues)
			total = total + val;
		args.SummaryValue = total;		
        args.SummaryLabel = "A:";
        args.SummaryUnits = "S+100";
			
    }
    //end eventHandler
}