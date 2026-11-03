//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendCalcSummaryAdd100
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendSummaryHandler
    public void TestsDataLegendCalcSummaryAdd100(object sender, DataLegendSummaryEventArgs args)
    {															
		double total = 100;
		foreach (var val in args.ColumnValues)
			total = total + val;
		args.SummaryValue = total;
			
    }
    //end eventHandler
}