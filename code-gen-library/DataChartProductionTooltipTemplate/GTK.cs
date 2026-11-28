//begin template
//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DataChartProductionTooltipTemplate
{
    //begin content
    // A tooltip here is not a template but content the series asks for each time it shows one: it hands
    // back the view it was given last time, to fill with the hovered item.
    public ChartToolTipUpdatingEventHandler DataChartProductionTooltipTemplate = (sender, args) =>
    {
        var content = args.CurrentView as Gtk.Box;
        if (content == null)
        {
            content = CreateProductionContent();
            args.CurrentView = content;
        }
        var item = (EnergyProductionByCountryItem)args.CurrentData.Item;
        var lines = content.Children;

        // Every fuel is listed whichever column is hovered, so the reader sees the country's whole mix.
        // Which series is hovered is carried by the title, drawn in that series' own brush.
        var title = (Gtk.Label)lines[0];
        title.Text = item.Country + " Production";
        var color = ((SolidColorBrush)((Series)sender).ActualBrush).Color;
        title.OverrideColor(Gtk.StateFlags.Normal, new Gdk.RGBA()
        {
            Red = color.R / 255.0, Green = color.G / 255.0, Blue = color.B / 255.0, Alpha = color.A / 255.0
        });

        SetProductionValue(lines[1], item.Coal);
        SetProductionValue(lines[2], item.Hydro);
        SetProductionValue(lines[3], item.Nuclear);
        SetProductionValue(lines[4], item.Gas);
        SetProductionValue(lines[5], item.Oil);
    };
    //end content

    //begin supportingMethods
    private static Gtk.Box CreateProductionContent()
    {
        var content = new Gtk.Box(Gtk.Orientation.Vertical, 0);
        content.Margin = 5;
        var title = new Gtk.Label();
        title.Xalign = 0;
        title.MarginBottom = 4;
        var bold = new Pango.AttrList();
        bold.Insert(new Pango.AttrWeight(Pango.Weight.Bold));
        title.Attributes = bold;
        content.PackStart(title, false, false, 0);
        foreach (var fuel in new[] { "Coal", "Hydro", "Nuclear", "Gas", "Oil" })
        {
            var row = new Gtk.Box(Gtk.Orientation.Horizontal, 0);
            var name = new Gtk.Label(fuel + ":");
            name.Xalign = 0;
            name.WidthRequest = 70;
            row.PackStart(name, false, false, 0);
            var value = new Gtk.Label();
            value.Xalign = 0;
            row.PackStart(value, false, false, 0);
            content.PackStart(row, false, false, 0);
        }
        content.ShowAll();
        return content;
    }

    private static void SetProductionValue(Gtk.Widget row, double value)
    {
        ((Gtk.Label)((Gtk.Box)row).Children[1]).Text = value.ToString();
    }
    //end supportingMethods
}
//end template
