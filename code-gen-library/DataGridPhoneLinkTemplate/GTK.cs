//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPhoneLinkTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPhoneLinkTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var item = (EmployeesSalesDataItem)args.CellInfo.RowItem;
        var phone = item.Phone;

        Gtk.Label label;
        if (content.Child is Gtk.Label existing)
        {
            label = existing;
        }
        else
        {
            // The XAML template's TextBlock: Verdana 13px, centred, holding a hyperlink in
            // #4286F4 (GTK draws a label's links in the colour its style gives them).
            label = new Gtk.Label();
            label.Valign = Gtk.Align.Center;
            label.Justify = Gtk.Justification.Center;
            var font = new Pango.FontDescription();
            font.Family = "Verdana";
            font.AbsoluteSize = 13 * Pango.Scale.PangoScale;
            var attributes = new Pango.AttrList();
            attributes.Insert(new Pango.AttrFontDesc(font));
            label.Attributes = attributes;
            var css = new Gtk.CssProvider();
            css.LoadFromData("label link { color: #4286F4; }");
            label.StyleContext.AddProvider(css, Gtk.StyleProviderPriority.Application);
            content.Add(label);
            label.Show();
        }

        var text = GLib.Markup.EscapeText(phone ?? "");
        label.Markup = "<a href=\"tel:" + text + "\">" + text + "</a>";
    }
    //end eventHandler
}
