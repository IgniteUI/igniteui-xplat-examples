//begin imports
using System.Windows.Controls;
using Infragistics.Controls.Grids;
//end imports

public class DataGridDeleteRowButtonTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridDeleteRowButtonTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        Button button;
        if (content.Content is Button existing)
        {
            button = existing;
        }
        else
        {
            button = new Button { Content = "Delete" };
            button.Click += (s, e) =>
            {
                var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
                var btn = (Button)s;
                if (btn.Tag != null)
                {
                    grid.RemoveItem(btn.Tag);
                }
            };
            content.Content = button;
        }

        button.IsEnabled = !args.CellInfo.IsDeleted;
        button.Tag = args.CellInfo.RowItem;
    }
    //end eventHandler
}
