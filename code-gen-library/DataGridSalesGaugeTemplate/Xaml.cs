//begin imports
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using Infragistics.Controls.Grids;
//end imports

public class DataGridSalesGaugeTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridSalesGaugeTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var item = (EmployeesSalesDataItem)args.CellInfo.RowItem;
        var sales = item.Sales;

        StackPanel panel;
        Rectangle gaugeTrack;
        Rectangle gaugeBar;
        TextBlock gaugeValue;

        if (content.Content is StackPanel existing)
        {
            panel = existing;
            var trackGrid = (Grid)panel.Children[0];
            gaugeTrack = (Rectangle)trackGrid.Children[0];
            gaugeBar = (Rectangle)trackGrid.Children[1];
            gaugeValue = (TextBlock)panel.Children[1];
        }
        else
        {
            panel = new StackPanel
            {
                Orientation = Orientation.Vertical,
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Stretch,
                Margin = new Thickness(16, 0, 16, 0)
            };

            var trackGrid = new Grid { Height = 6, Margin = new Thickness(0, 8, 0, 0) };
            gaugeTrack = new Rectangle { Fill = new SolidColorBrush(Color.FromArgb(0xFF, 0xDD, 0xDD, 0xDD)), Height = 4, VerticalAlignment = VerticalAlignment.Center };
            gaugeBar = new Rectangle { Fill = new SolidColorBrush(Color.FromArgb(0xFF, 0x7F, 0x7F, 0x7F)), Height = 6, HorizontalAlignment = HorizontalAlignment.Left, VerticalAlignment = VerticalAlignment.Center };
            trackGrid.Children.Add(gaugeTrack);
            trackGrid.Children.Add(gaugeBar);

            gaugeValue = new TextBlock
            {
                FontFamily = new FontFamily("Verdana"),
                FontSize = 13,
                TextAlignment = TextAlignment.Center,
                Margin = new Thickness(0, 2, 0, 0)
            };

            panel.Children.Add(trackGrid);
            panel.Children.Add(gaugeValue);
            content.Content = panel;
        }

        Brush activeBrush;
        if (sales < 400000) activeBrush = new SolidColorBrush(Color.FromArgb(0xFF, 211, 17, 3));
        else if (sales < 650000) activeBrush = new SolidColorBrush(Colors.Orange);
        else activeBrush = new SolidColorBrush(Color.FromArgb(0xFF, 21, 190, 6));

        gaugeValue.Foreground = activeBrush;
        gaugeBar.Fill = activeBrush;

        var gaugeFraction = System.Math.Min(1.0, sales / 990000.0);
        gaugeBar.Width = double.IsNaN(content.ActualWidth) || content.ActualWidth <= 0 ? 0 : content.ActualWidth * gaugeFraction;

        gaugeValue.Text = "$" + (sales / 1000) + ",000";
    }
    //end eventHandler
}
