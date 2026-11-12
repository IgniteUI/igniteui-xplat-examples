//begin template
//begin imports
using Infragistics.Controls.Charts;
//end imports

public class CategoryChartTooltipTemplate
{
    //begin content
    // A tooltip here is not a template but content the chart asks for each time it shows one: it hands
    // back the view it was given last time, to fill with the hovered item.
    public ChartToolTipUpdatingEventHandler CategoryChartTooltipTemplate = (sender, args) =>
    {
        var content = args.CurrentView as Gtk.Box;
        if (content == null)
        {
            content = new Gtk.Box(Gtk.Orientation.Vertical, 0);
            content.Margin = 5;
            var title = new Gtk.Label();
            title.Xalign = 0;
            var bold = new Pango.AttrList();
            bold.Insert(new Pango.AttrWeight(Pango.Weight.Bold));
            title.Attributes = bold;
            content.PackStart(title, false, false, 0);
            for (int i = 0; i < 2; i++)
            {
                var line = new Gtk.Label();
                line.Xalign = 0;
                content.PackStart(line, false, false, 0);
            }
            content.ShowAll();
            args.CurrentView = content;
        }
        var item = (MovieFranchiseRevenueItem)args.CurrentData.Item;
        var lines = content.Children;
        ((Gtk.Label)lines[0]).Text = "Franchise: " + item.Franchise;
        ((Gtk.Label)lines[1]).Text = "Revenue of All Movies: " + item.TotalRevenue;
        ((Gtk.Label)lines[2]).Text = "Highest Grossing Movie: $" + item.HighestGrossing;
    };
    //end content
}
//end template
