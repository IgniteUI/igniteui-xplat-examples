//begin imports
using Infragistics.Core.Graphics;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceAvgSaleDataBound
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.DataBindingEventHandler
    public void DataGridPerformanceAvgSaleDataBound(object sender, DataBindingEventArgs args)
    {
        var item = args.CellInfo.RowItem as SalesPerson;
        if (item == null) return;

        if (item.AvgSaleHeat > 0)
        {
            var p = item.AvgSaleHeat;
            var r = (byte)System.Math.Round((1.0 + (0.0 - 1.0) * p) * 255.0);
            var g = (byte)System.Math.Round(1.0 * 255.0);
            var b = (byte)System.Math.Round((1.0 + (0.0 - 1.0) * p) * 255.0);
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb(0xFF, r, g, b));
        }
        else if (item.AvgSaleHeat < 0)
        {
            var p = item.AvgSaleHeat * -1.0;
            var r = (byte)System.Math.Round(1.0 * 255.0);
            var g = (byte)System.Math.Round((1.0 + (0.0 - 1.0) * p) * 255.0);
            var b = (byte)System.Math.Round((1.0 + (0.0 - 1.0) * p) * 255.0);
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb(0xFF, r, g, b));
        }
        else
        {
            args.CellInfo.Background = new SolidColorBrush(Colors.White);
        }
    }
    //end eventHandler
}
