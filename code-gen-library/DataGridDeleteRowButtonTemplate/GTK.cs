//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridDeleteRowButtonTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridDeleteRowButtonTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        Gtk.Button button;
        if (content.Child is Gtk.Button existing)
        {
            button = existing;
        }
        else
        {
            button = new Gtk.Button("Delete");
            button.Clicked += (s, e) =>
            {
                var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
                var btn = (Gtk.Button)s;
                var rowItem = btn.Data["RowItem"];
                if (rowItem != null)
                {
                    grid.RemoveItem(rowItem);
                }
            };
            content.Add(button);
            button.ShowAll();
        }

        button.Sensitive = !args.CellInfo.IsDeleted;
        // The row the button deletes, as the XAML template keeps it in the button's Tag.
        button.Data["RowItem"] = args.CellInfo.RowItem;
    }
    //end eventHandler
}
