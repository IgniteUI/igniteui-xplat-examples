//begin template
//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DataChartAirplaneSeatTooltipTemplate
{
    //begin content
    // A tooltip here is not a template but content the series asks for each time it shows one: it hands
    // back the view it was given last time, to fill with the hovered item.
    public ChartToolTipUpdatingEventHandler DataChartAirplaneSeatTooltipTemplate = (sender, args) =>
    {
        var content = args.CurrentView as Gtk.Box;
        if (content == null)
        {
            content = new Gtk.Box(Gtk.Orientation.Vertical, 0);
            content.Margin = 5;
            for (int i = 0; i < 4; i++)
            {
                var line = new Gtk.Label();
                line.Xalign = 0;
                content.PackStart(line, false, false, 0);
            }
            content.ShowAll();
            args.CurrentView = content;
        }
        // A seat is identified by where it is and what it costs. The two things the plan is coloured by,
        // its cabin class and whether it is sold, are named here as well, so the colour under the pointer
        // can be read rather than guessed at from the legend.
        var item = (AirplaneSeatsItem)args.CurrentData.Item;
        var lines = content.Children;
        ((Gtk.Label)lines[0]).Text = "Class: " + item.Class;
        ((Gtk.Label)lines[1]).Text = "Seat: " + item.Seat;
        ((Gtk.Label)lines[2]).Text = "Price: $" + item.Price;
        ((Gtk.Label)lines[3]).Text = "Status: " + item.Status;
    };
    //end content
}
//end template
