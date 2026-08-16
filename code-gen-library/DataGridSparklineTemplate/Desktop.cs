//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Grids;
using System.Windows.Controls;
using System.Windows.Media;
//end imports

public class DataGridSparklineTemplate
{
    //begin eventHandler
    /// <summary>
    /// A sparkline drawn in the cell from the row's own order history. The grid reuses its cells as
    /// it scrolls, so the chart is built once and given the new row's data on every pass.
    /// </summary>
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridSparklineTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var info = args.CellInfo;
        XamSparkline chart;

        if (content.Content is Border existing)
        {
            chart = (XamSparkline)existing.Child;
        }
        else
        {
            chart = new XamSparkline();
            chart.ValueMemberPath = "Sold";
            chart.LabelMemberPath = "Week";
            chart.DisplayType = SparklineDisplayType.Line;
            chart.Brush = new SolidColorBrush(Color.FromRgb(21, 190, 6));

            var container = new Border();
            container.Height = 70;
            container.Background = null;
            container.Child = chart;

            content.Content = container;
        }

        var item = info.RowItem as ProductWithHistory;
        if (item == null) return;
        chart.ItemsSource = item.OrderHistory;
    }
    //end eventHandler
}
