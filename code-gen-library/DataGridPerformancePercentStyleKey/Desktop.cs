//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformancePercentStyleKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.CellStyleKeyRequestedEventHandler
    public void DataGridPerformancePercentStyleKey(object sender, CellStyleRequestedEventArgs args)
    {
        var value = System.Convert.ToDouble(args.ResolvedValue);
        if (value >= 0)
        {
            args.StyleKey = "pricePercentUp";
        }
        else
        {
            args.StyleKey = "pricePercentDown";
        }
    }
    //end eventHandler
}
