//begin template
//begin imports
using Infragistics.Controls.Grids;
using Infragistics.Controls.Charts;
//end imports

public class DataGridSparklineTemplate
{
    //begin content
    // A template cell here is not a template but content the column asks for each time it shows a row: it hands
    // back the cell's content, holding the sparkline it was given the first time, to show the row's history.
    public TemplateCellUpdatingEventHandler DataGridSparklineTemplate = (sender, args) =>
    {
        var content = args.Content;
        var sparkline = content.Child as IggSparkline;
        if (sparkline == null)
        {
            sparkline = new IggSparkline();
            sparkline.HeightRequest = 70;
            sparkline.Valign = Gtk.Align.Center;
            sparkline.DisplayType = SparklineDisplayType.Line;
            sparkline.ValueMemberPath = "Sold";
            sparkline.LabelMemberPath = "Week";
            sparkline.Brush = new SolidColorBrush(Color.FromArgb(255, 0x15, 0xBE, 0x06));
            content.Add(sparkline);
            sparkline.ShowAll();
        }
        sparkline.ItemsSource = ((ProductWithHistory)args.CellInfo.RowItem).OrderHistory;
    };
    //end content
}
//end template
