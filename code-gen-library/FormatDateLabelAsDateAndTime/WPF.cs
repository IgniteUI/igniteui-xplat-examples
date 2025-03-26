//begin imports
using System.Collections;
//end imports

public class FormatDateLabelAsDateAndTime
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public string FormatDateLabelAsDateAndTime(object sender, object item)
    {
        DateTime d;
        if (item is DateTime)
        {
            d = (DateTime)item;

        }
        else if (item is IDictionary)
        {
            d = (DateTime)((IDictionary)item)["Date"];
        }
        else
        {
            d = (DateTime)item.GetType().GetProperty("Date").GetValue(item);

        }
        return d.ToString("yyyy-MM-dd HH:mm:ss");
    }
    //end eventHandler
}