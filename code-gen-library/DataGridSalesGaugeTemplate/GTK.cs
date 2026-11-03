//begin imports
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

        Gtk.Box panel;
        Gtk.DrawingArea gauge;
        Gtk.Label gaugeValue;

        if (content.Child is Gtk.Box existing)
        {
            panel = existing;
            gauge = (Gtk.DrawingArea)panel.Children[0];
            gaugeValue = (Gtk.Label)panel.Children[1];
        }
        else
        {
            panel = new Gtk.Box(Gtk.Orientation.Vertical, 0);
            panel.Valign = Gtk.Align.Center;
            panel.MarginStart = 16;
            panel.MarginEnd = 16;

            // The XAML template's track Grid: a 4px grey track under a 6px bar the width of the
            // sales fraction, both vertically centred in 6px.
            gauge = new Gtk.DrawingArea() { HeightRequest = 6, MarginTop = 8 };
            gauge.Drawn += (s, e) =>
            {
                var area = (Gtk.DrawingArea)s;
                var cr = e.Cr;
                double width = area.AllocatedWidth;
                cr.SetSourceRGB(0xDD / 255.0, 0xDD / 255.0, 0xDD / 255.0);
                cr.Rectangle(0, 1, width, 4);
                cr.Fill();
                var fraction = (double)area.Data["Fraction"];
                var color = (Gdk.RGBA)area.Data["Color"];
                cr.SetSourceRGBA(color.Red, color.Green, color.Blue, color.Alpha);
                cr.Rectangle(0, 0, width * fraction, 6);
                cr.Fill();
            };

            gaugeValue = new Gtk.Label() { Justify = Gtk.Justification.Center, MarginTop = 2 };

            panel.PackStart(gauge, false, false, 0);
            panel.PackStart(gaugeValue, false, false, 0);
            content.Add(panel);
            panel.ShowAll();
        }

        Gdk.RGBA activeColor;
        if (sales < 400000) activeColor = new Gdk.RGBA() { Red = 211 / 255.0, Green = 17 / 255.0, Blue = 3 / 255.0, Alpha = 1 };
        else if (sales < 650000) activeColor = new Gdk.RGBA() { Red = 1.0, Green = 0xA5 / 255.0, Blue = 0, Alpha = 1 };
        else activeColor = new Gdk.RGBA() { Red = 21 / 255.0, Green = 190 / 255.0, Blue = 6 / 255.0, Alpha = 1 };

        var font = new Pango.FontDescription();
        font.Family = "Verdana";
        font.AbsoluteSize = 13 * Pango.Scale.PangoScale;
        var attributes = new Pango.AttrList();
        attributes.Insert(new Pango.AttrFontDesc(font));
        attributes.Insert(new Pango.AttrForeground(
            (ushort)(activeColor.Red * 65535), (ushort)(activeColor.Green * 65535), (ushort)(activeColor.Blue * 65535)));
        gaugeValue.Attributes = attributes;

        gauge.Data["Fraction"] = System.Math.Min(1.0, sales / 990000.0);
        gauge.Data["Color"] = activeColor;
        gauge.QueueDraw();

        gaugeValue.Text = "$" + (sales / 1000) + ",000";
    }
    //end eventHandler
}
