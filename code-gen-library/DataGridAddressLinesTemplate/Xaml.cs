//begin imports
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
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

        StackPanel panel;
        TextBlock line1;
        TextBlock line2;

        if (content.Content is StackPanel existing)
        {
            panel = existing;
            line1 = (TextBlock)panel.Children[0];
            line2 = (TextBlock)panel.Children[1];
        }
        else
        {
            panel = new StackPanel
            {
                Orientation = Orientation.Vertical,
                VerticalAlignment = VerticalAlignment.Center
            };
            line1 = new TextBlock { FontFamily = new FontFamily("Verdana"), FontSize = 13, Foreground = new SolidColorBrush(Color.FromArgb(0xFF, 24, 29, 31)) };
            line2 = new TextBlock { FontFamily = new FontFamily("Verdana"), FontSize = 13, Foreground = new SolidColorBrush(Color.FromArgb(0xFF, 24, 29, 31)) };
            panel.Children.Add(line1);
            panel.Children.Add(line2);
            content.Content = panel;
        }

        line1.Text = street;
        line2.Text = city + ", " + country;
    }
    //end eventHandler
}
