//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsDataLegendStyleHideSeriesRows
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public void TestsDataLegendStyleHideSeriesRows(object sender, DataLegendStylingRowEventArgs args)
    {  																	
		 
		args.IsRowVisible = false;
		
    }
    //end eventHandler
}