//begin imports
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
        byte r = priceShiftUp ? (byte)0x4E : (byte)0xFF;
        byte g = priceShiftUp ? (byte)0xB8 : (byte)0x13;
        byte b = priceShiftUp ? (byte)0x62 : (byte)0x4A;

        Gtk.Box panel;
        Gtk.Label priceText;

        if (content.Child is Gtk.Box existing)
        {
            panel = existing;
            priceText = (Gtk.Label)panel.Children[0];
        }
        else
        {
            panel = new Gtk.Box(Gtk.Orientation.Horizontal, 0);
            panel.Halign = Gtk.Align.End;
            panel.Valign = Gtk.Align.Center;
            priceText = new Gtk.Label();
            panel.PackStart(priceText, false, false, 0);
            content.Add(panel);
            panel.ShowAll();
        }

        priceText.Text = "$" + System.Math.Round(System.Convert.ToDouble(args.CellInfo.Value), 2).ToString("F2");
        SetTextStyle(priceText, r, g, b);

        // Verdana 13px in the given colour, as the XAML template's TextBlock.
        void SetTextStyle(Gtk.Label label, byte red, byte green, byte blue)
        {
            var font = new Pango.FontDescription();
            font.Family = "Verdana";
            font.AbsoluteSize = 13 * Pango.Scale.PangoScale;
            var attributes = new Pango.AttrList();
            attributes.Insert(new Pango.AttrFontDesc(font));
            attributes.Insert(new Pango.AttrForeground((ushort)(red * 257), (ushort)(green * 257), (ushort)(blue * 257)));
            label.Attributes = attributes;
        }
    }
    //end eventHandler
}
