//begin imports
using System;
using System.Globalization;
using Microsoft.UI.Xaml.Data;
//end imports

//begin supportingTypes
// Formats a bound value into a sentence, the way Binding.StringFormat does on WPF.
//
// WinUI's Binding has no StringFormat, so a tooltip that labels its values has nowhere to put the
// label. The format string travels as the ConverterParameter instead, and it is the same string the
// shared Xaml.xaml writes, so the two spellings of the item say the same thing.
public class StringFormatConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        var format = parameter as string;
        if (string.IsNullOrEmpty(format))
        {
            return value == null ? null : value.ToString();
        }
        return string.Format(CultureInfo.CurrentCulture, format, value);
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotSupportedException();
    }
}
//end supportingTypes
