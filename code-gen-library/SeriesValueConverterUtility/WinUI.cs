//begin imports
using Infragistics.Controls.Charts;
using System;
using Microsoft.UI.Xaml.Data;
//end imports

//begin supportingTypes
// Reads the value a marker stands for, whichever series it belongs to.
//
// A marker template is one template shared by every series, and its data context carries the record
// and the series but not the number: the number is whichever column that series draws. So this reads
// one from the other, which is what the drawn marker on the web does when it looks up
// series.valueColumn.propertyName.
//
// WinUI has no MultiBinding, so the whole data context is passed and both halves are read off it here.
public class SeriesValueConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        var context = value as DataContext;
        if (context == null)
        {
            return null;
        }
        var item = context.Item;
        var series = context.Series as Series;
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

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotSupportedException();
    }
}
//end supportingTypes
