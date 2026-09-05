//begin imports
using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Media;
using System.Windows.Navigation;
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

        if (content.Content is TextBlock existing && existing.Inlines.FirstInline is Hyperlink hl)
        {
            textBlock = existing;
            hyperlink = hl;
            run = (Run)hyperlink.Inlines.FirstInline;
        }
        else
        {
            run = new Run();
            hyperlink = new Hyperlink(run) { Foreground = new SolidColorBrush(Color.FromRgb(0x42, 0x86, 0xF4)) };
            hyperlink.RequestNavigate += (s, e) => { Process.Start(new ProcessStartInfo(e.Uri.AbsoluteUri) { UseShellExecute = true }); e.Handled = true; };
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
