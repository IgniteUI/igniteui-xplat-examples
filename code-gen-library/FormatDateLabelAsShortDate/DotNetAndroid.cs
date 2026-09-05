//begin imports
using Infragistics.Controls.Charts;
using System;
using System.Collections;
//end imports

public class FormatDateLabelAsShortDate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public void FormatDateLabelAsShortDate(object sender, AxisFormatLabelEventArgs args)
    {
        var item = args.Item;
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
            if (item is double)
            {
                if (((double)item) >= long.MinValue && ((double)item) <= long.MaxValue)
                {
                    double db = (double)item;
                    long ticks = (long)db;
                    d = new DateTime(ticks);
                }
                else
                {
                    args.Label = item.ToString();
                    return;
                }
            }
            else
                d = (DateTime)item.GetType().GetProperty("Date").GetValue(item);

        }
        args.Label = d.ToString("MM/dd/yy");
    }
    //end eventHandler
}
