//begin imports
//end imports

public class ChartAxisCurrencyFormat
{
//begin eventHandler
//WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public string ChartAxisCurrencyFormat(object sender, object item)
    {
        if (item == null) {
            return null;
        }
        if (!(item is double)) {
            return null;
        }
        return ((double)item).ToString("C");
    }
//end eventHandler
}