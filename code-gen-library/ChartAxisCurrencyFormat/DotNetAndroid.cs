//begin imports
using Infragistics.Controls.Charts;
//end imports

public class ChartAxisCurrencyFormat
{
//begin eventHandler
//WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public void ChartAxisCurrencyFormat(object sender, AxisFormatLabelEventArgs args)
    {
        var item = args.Item;
        if (item == null) {
            return;
        }
        if (!(item is double)) {
            return;
        }
        args.Label = ((double)item).ToString("C");
    }
//end eventHandler
}
