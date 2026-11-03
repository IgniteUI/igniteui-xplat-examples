//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceChangeStyleKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.CellStyleRequestedEventHandler
    public void DataGridPerformanceChangeStyleKey(object sender, CellStyleRequestedEventArgs args)
    {
        var value = System.Convert.ToDouble(args.ResolvedValue);
        if (value >= 0)
        {
            args.StyleKey = "priceAmountUp";
        }
        else
        {
            args.StyleKey = "priceAmountDown";
        }
    }
    //end eventHandler
}
