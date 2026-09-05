//begin imports
using Infragistics.Core.Graphics;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPriceDataBound
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.DataBindingEventHandler
    public void DataGridPriceDataBound(object sender, DataBindingEventArgs args)
    {
        var item = args.CellInfo.RowItem as PortfolioDataItem;
        if (item == null) return;

        if (item.PriceHeat > 0)
        {
            var p = item.PriceHeat;
            const double minA = 1.0, maxA = 0.25;
            const double minR = 1.0, maxR = 0.0;
            const double minG = 1.0, maxG = 1.0;
            const double minB = 1.0, maxB = 0.0;

            var a = minA + (maxA - minA) * p;
            var r = (byte)System.Math.Round((minR + (maxR - minR) * p) * 255.0);
            var g = (byte)System.Math.Round((minG + (maxG - minG) * p) * 255.0);
            var b = (byte)System.Math.Round((minB + (maxB - minB) * p) * 255.0);
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb((byte)System.Math.Round(a * 255.0), r, g, b));
        }
        else if (item.PriceHeat < 0)
        {
            var p = item.PriceHeat * -1.0;
            const double minA = 1.0, maxA = 0.25;
            const double minR = 1.0, maxR = 1.0;
            const double minG = 1.0, maxG = 0.0;
            const double minB = 1.0, maxB = 0.0;

            var a = minA + (maxA - minA) * p;
            var r = (byte)System.Math.Round((minR + (maxR - minR) * p) * 255.0);
            var g = (byte)System.Math.Round((minG + (maxG - minG) * p) * 255.0);
            var b = (byte)System.Math.Round((minB + (maxB - minB) * p) * 255.0);
            args.CellInfo.Background = new SolidColorBrush(Color.FromArgb((byte)System.Math.Round(a * 255.0), r, g, b));
        }
        else
        {
            args.CellInfo.Background = new SolidColorBrush(Colors.White);
        }
    }
    //end eventHandler
}
