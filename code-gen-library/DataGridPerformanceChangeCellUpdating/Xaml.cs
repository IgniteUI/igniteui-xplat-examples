//begin imports
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceChangeCellUpdating
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPerformanceChangeCellUpdating(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var value = System.Convert.ToDouble(args.CellInfo.Value);
        var priceShiftUp = value >= 0;
        var color = priceShiftUp
            ? new SolidColorBrush(Color.FromArgb(0xFF, 0x4E, 0xB8, 0x62))
            : new SolidColorBrush(Color.FromArgb(0xFF, 0xFF, 0x13, 0x4A));

        Border border;
        TextBlock text;

        if (content.Content is Border existing)
        {
            border = existing;
            text = (TextBlock)border.Child;
        }
        else
        {
            text = new TextBlock { FontFamily = new FontFamily("Verdana"), FontSize = 13 };
            border = new Border
            {
                Child = text,
                BorderThickness = new Thickness(0, 0, 4, 0),
                Padding = new Thickness(0, 0, 5, 0),
                HorizontalAlignment = HorizontalAlignment.Right,
                VerticalAlignment = VerticalAlignment.Center
            };
            content.Content = border;
        }

        text.Text = value.ToString("F2");
        border.BorderBrush = color;
    }
    //end eventHandler
}
