//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformancePercentCellUpdating
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPerformancePercentCellUpdating(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var value = System.Convert.ToDouble(args.CellInfo.Value);
        var priceShiftUp = value >= 0;
        var color = priceShiftUp
            ? new Gdk.RGBA() { Red = 0x4E / 255.0, Green = 0xB8 / 255.0, Blue = 0x62 / 255.0, Alpha = 1 }
            : new Gdk.RGBA() { Red = 0xFF / 255.0, Green = 0x13 / 255.0, Blue = 0x4A / 255.0, Alpha = 1 };

        // The XAML template's right-bordered Border: the text, 5px of padding, then a 4px bar in
        // the change colour.
        Gtk.Box border;
        Gtk.Label text;
        Gtk.EventBox bar;

        if (content.Child is Gtk.Box existing)
        {
            border = existing;
            text = (Gtk.Label)border.Children[0];
            bar = (Gtk.EventBox)border.Children[1];
        }
        else
        {
            text = new Gtk.Label();
            var font = new Pango.FontDescription();
            font.Family = "Verdana";
            font.AbsoluteSize = 13 * Pango.Scale.PangoScale;
            var attributes = new Pango.AttrList();
            attributes.Insert(new Pango.AttrFontDesc(font));
            text.Attributes = attributes;
            bar = new Gtk.EventBox() { WidthRequest = 4 };
            border = new Gtk.Box(Gtk.Orientation.Horizontal, 5);
            border.Halign = Gtk.Align.End;
            border.Valign = Gtk.Align.Center;
            border.PackStart(text, false, false, 0);
            border.PackStart(bar, false, true, 0);
            content.Add(border);
            border.ShowAll();
        }

        text.Text = value.ToString("F2") + "%";
        bar.OverrideBackgroundColor(Gtk.StateFlags.Normal, color);
    }
    //end eventHandler
}
