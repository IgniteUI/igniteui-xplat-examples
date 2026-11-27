//begin imports
using Avalonia.Controls;
using Avalonia.Media;
using Infragistics.Controls.Grids;
//end imports
public class DataGridPhoneLinkTemplate
{
    //begin eventHandler
    //Avalonia: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPhoneLinkTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        var content = args.Content;
        var item = (EmployeesSalesDataItem)args.CellInfo.RowItem;
        var link = content.Content as HyperlinkButton;
        if (link == null)
        {
            link = new HyperlinkButton
            {
                Foreground = new SolidColorBrush(Color.FromArgb(0xFF, 0x42, 0x86, 0xF4)),
                FontFamily = new FontFamily("Verdana"), FontSize = 13,
                VerticalAlignment = VerticalAlignment.Center,
                HorizontalAlignment = HorizontalAlignment.Center
            };
            content.Content = link;
        }
        link.NavigateUri = new Uri("tel:" + item.Phone);
        link.Content = item.Phone;
    }
    //end eventHandler
}
