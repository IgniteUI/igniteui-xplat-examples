//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Microsoft.UI;
using Microsoft.UI.Xaml.Media;
using Windows.UI;
//end imports

public class ShapeFileStyling
{
    //begin eventHandler
    //WinUI: Infragistics.Controls.Charts.AssigningShapeStyleEventHandler
    public void ShapeFileStyling(object sender, AssigningShapeStyleEventArgs args)
    {
        // conditional styling based on the Continent field loaded from the DBF file. The event
        // covers a range of items rather than one, so the record is asked for by index.
        var record = args.GetItems(args.StartIndex, args.EndIndex)[0] as ShapefileRecord;
        var continent = record?.Fields["Continent"] as string;

        Color fill;
        if (continent == "Africa") {
            fill = Color.FromArgb(0xFF, 0xEC, 0xB9, 0x12);
        } else if (continent == "Asia") {
            fill = Color.FromArgb(0xFF, 0xE1, 0x1D, 0x1D);
        } else if (continent == "Europe") {
            fill = Color.FromArgb(0xFF, 0x28, 0x94, 0xEC);
        } else if (continent == "South America" || continent == "North America") {
            fill = Color.FromArgb(0xFF, 0x0C, 0xC3, 0x08);
        } else if (continent == "Australia") {
            fill = Color.FromArgb(0xFF, 0xB4, 0x2A, 0xE9);
        } else {
            fill = Colors.Gray;
        }
        args.Fill = new SolidColorBrush(fill);
        args.Stroke = new SolidColorBrush(Colors.Black);
    }
    //end eventHandler
}
