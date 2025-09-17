//begin imports
using Infragistics.Win.DataVisualization;
//end imports

public class ChartAxisCurrencyFormat
{
    //begin eventHandler
    //WindowsForms: Infragistics.Win.DataVisualization.AxisFormatLabelHandler
    public string ChartAxisCurrencyFormat(AxisLabelInfo info)
    {
        if (info.Item == null)
        {
            return null;
        }

        return info.Value.ToString("C");
    }
    //end eventHandler
}