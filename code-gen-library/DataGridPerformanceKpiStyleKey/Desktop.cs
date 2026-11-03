//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceKpiStyleKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.CellStyleRequestedEventHandler
    public void DataGridPerformanceKpiStyleKey(object sender, CellStyleRequestedEventArgs args)
    {
        var value = System.Convert.ToDouble(args.ResolvedValue);
        if (value < 20.0)
        {
            args.StyleKey = "kpi_red";
        }
        else if (value > 80.0)
        {
            args.StyleKey = "kpi_green";
        }
    }
    //end eventHandler
}
