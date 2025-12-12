//begin imports
using System;
using System.Collections;
using Infragistics.Win.DataVisualization;
//end imports

public class FormatDateLabelAsDateAndTime
{
    //begin eventHandler
    //WindowsForms: Infragistics.Win.DataVisualization.AxisFormatLabelHandler
    public string FormatDateLabelAsDateAndTime(AxisLabelInfo info)
    {
        DateTime d;
        if (info.HasDate)
        {
            d = (DateTime)info.DateValue;
        }
        else if (info.HasItem && info.Item is IDictionary)
        {
            d = (DateTime)((IDictionary)info.Item)["Date"];
        }
        else
        { 
            if (info.Value is double)
            {
                if (((double)info.Value) >= long.MinValue && ((double)info.Value) <= long.MaxValue)
                {
                    double db = (double)info.Value;
                    long ticks = (long)db;
                    d = new DateTime(ticks);
                }
                else
                    return info.Value.ToString();
            }
            else
                d = (DateTime)info.Item.GetType().GetProperty("Date").GetValue(info.Item);

        }
        return d.ToString("yyyy-MM-dd HH:mm:ss");
    }
    //end eventHandler
}