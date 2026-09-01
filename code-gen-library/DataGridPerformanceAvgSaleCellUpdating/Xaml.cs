//begin imports
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceAvgSaleCellUpdating
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPerformanceAvgSaleCellUpdating(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var item = args.CellInfo.RowItem as SalesPerson;
        if (item == null) return;

        var priceShiftUp = item.Change >= 0;
        var color = priceShiftUp
            ? new SolidColorBrush(Color.FromArgb(0xFF, 0x4E, 0xB8, 0x62))
            : new SolidColorBrush(Color.FromArgb(0xFF, 0xFF, 0x13, 0x4A));

        StackPanel panel;
        TextBlock priceText;

        if (content.Content is StackPanel existing)
        {
            panel = existing;
            priceText = (TextBlock)panel.Children[0];
        }
        else
        {
            panel = new StackPanel
            {
                Orientation = Orientation.Horizontal,
                HorizontalAlignment = HorizontalAlignment.Right,
                VerticalAlignment = VerticalAlignment.Center
            };
            priceText = new TextBlock { FontFamily = new FontFamily("Verdana"), FontSize = 13 };
            panel.Children.Add(priceText);
            content.Content = panel;
        }

        priceText.Text = "$" + System.Math.Round(System.Convert.ToDouble(args.CellInfo.Value), 2).ToString("F2");
        priceText.Foreground = color;
    }
    //end eventHandler
}
