//begin imports
using Infragistics.Controls.Charts;
using System;
using System.Globalization;
using System.Windows.Data;
//end imports

//begin supportingTypes
// Reads the value a marker stands for, whichever series it belongs to.
//
// A marker template is one template shared by every series, and its data context carries the record
// and the series but not the number: the number is whichever column that series draws. So the two are
// bound together and this reads one from the other, which is what the drawn marker on the web does
// when it looks up series.valueColumn.propertyName.
public class SeriesValueConverter : IMultiValueConverter
{
    public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
    {
        if (values == null || values.Length < 2)
        {
            return null;
        }
        var item = values[0];
        var series = values[1] as Series;
        if (item == null || series == null)
        {
            return null;
        }
        var path = series.GetType().GetProperty("ValueMemberPath");
        if (path == null)
        {
            return null;
        }
        var column = path.GetValue(series, null) as string;
        if (string.IsNullOrEmpty(column))
        {
            return null;
        }
        var property = item.GetType().GetProperty(column);
        if (property == null)
        {
            return null;
        }
        return property.GetValue(item, null);
    }

    public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
    {
        throw new NotSupportedException();
    }
}
//end supportingTypes
