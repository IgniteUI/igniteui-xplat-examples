//begin imports
using Microsoft.UI;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Documents;
using Microsoft.UI.Xaml.Media;
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

        TextBlock textBlock;
        Hyperlink hyperlink;
        Run run;

        if (content.Content is TextBlock existing && existing.Inlines.Count > 0 && existing.Inlines[0] is Hyperlink hl)
        {
            textBlock = existing;
            hyperlink = hl;
            run = (Run)hyperlink.Inlines[0];
        }
        else
        {
            run = new Run();
            hyperlink = new Hyperlink { Foreground = new SolidColorBrush(Color.FromArgb(0xFF, 0x42, 0x86, 0xF4)) };
            hyperlink.Inlines.Add(run);
            textBlock = new TextBlock
            {
                FontFamily = new FontFamily("Verdana"),
                FontSize = 13,
                VerticalAlignment = VerticalAlignment.Center,
                TextAlignment = TextAlignment.Center
            };
            textBlock.Inlines.Add(hyperlink);
            content.Content = textBlock;
        }

        hyperlink.NavigateUri = new System.Uri("tel:" + phone);
        run.Text = phone;
    }
    //end eventHandler
}
