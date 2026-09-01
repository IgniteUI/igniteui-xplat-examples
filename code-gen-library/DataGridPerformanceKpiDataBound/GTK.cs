//begin imports
using Infragistics.Core.Graphics;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceKpiDataBound
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.DataBindingEventHandler
    public void DataGridPerformanceKpiDataBound(object sender, DataBindingEventArgs args)
    {
        var value = System.Convert.ToDouble(args.ResolvedValue);
        if (value < 20.0)
        {
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb(0xFF, 0xFF, 0x13, 0x4A));
        }
        else if (value > 80.0)
        {
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb(0xFF, 0x4E, 0xB8, 0x62));
        }
    }
    //end eventHandler
}
