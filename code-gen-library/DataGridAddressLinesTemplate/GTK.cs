//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridAddressLinesTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridAddressLinesTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var item = (EmployeesSalesDataItem)args.CellInfo.RowItem;
        var street = item.Street;
        var city = item.City;
        var country = item.Country;

        Gtk.Box panel;
        Gtk.Label line1;
        Gtk.Label line2;

        if (content.Child is Gtk.Box existing)
        {
            panel = existing;
            line1 = (Gtk.Label)panel.Children[0];
            line2 = (Gtk.Label)panel.Children[1];
        }
        else
        {
            panel = new Gtk.Box(Gtk.Orientation.Vertical, 0);
            panel.Valign = Gtk.Align.Center;
            line1 = new Gtk.Label() { Xalign = 0 };
            line2 = new Gtk.Label() { Xalign = 0 };
            SetTextStyle(line1, 24, 29, 31);
            SetTextStyle(line2, 24, 29, 31);
            panel.PackStart(line1, false, false, 0);
            panel.PackStart(line2, false, false, 0);
            content.Add(panel);
            panel.ShowAll();
        }

        line1.Text = street;
        line2.Text = city + ", " + country;

        // Verdana 13px in the given colour, as the XAML template's TextBlocks.
        void SetTextStyle(Gtk.Label label, byte r, byte g, byte b)
        {
            var font = new Pango.FontDescription();
            font.Family = "Verdana";
            font.AbsoluteSize = 13 * Pango.Scale.PangoScale;
            var attributes = new Pango.AttrList();
            attributes.Insert(new Pango.AttrFontDesc(font));
            attributes.Insert(new Pango.AttrForeground((ushort)(r * 257), (ushort)(g * 257), (ushort)(b * 257)));
            label.Attributes = attributes;
        }
    }
    //end eventHandler
}
