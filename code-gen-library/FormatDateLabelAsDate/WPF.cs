//begin imports
using System;
using System.Collections;
//end imports

public class FormatDateLabelAsDate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public string FormatDateLabelAsDate(object sender, object item)
    {
        DateTime d;
        if (item is DateTime)
        {
            d = (DateTime) item;

        }
        else if (item is IDictionary)
        {
            d = (DateTime) ((IDictionary) item)["Date"];
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
                    return item.ToString();
            }
            else
                d = (DateTime)item.GetType().GetProperty("Date").GetValue(item);

        }
        return d.ToString("yyyy-MM-dd");
    }
    //end eventHandler
}