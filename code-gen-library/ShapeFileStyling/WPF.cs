//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System.Windows.Media;
//end imports

public class ShapeFileStyling
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningShapeStyleEventHandler
    public void ShapeFileStyling(object sender, AssigningShapeStyleEventArgs args)
    {
        // conditional styling based on the Continent field loaded from the DBF file. The event
        // covers a range of items rather than one, so the record is asked for by index.
        var record = args.GetItems(args.StartIndex, args.EndIndex)[0] as ShapefileRecord;
        var continent = record.Fields["Continent"] as string;

        string fill;
        if (continent == "Africa")
        {
            fill = "#ECB912";
        }
        else if (continent == "Asia")
        {
            fill = "#E11D1D";
        }
        else if (continent == "Europe")
        {
            fill = "#2894EC";
        }
        else if (continent == "South America" || continent == "North America")
        {
            fill = "#0CC308";
        }
        else if (continent == "Australia")
        {
            fill = "#B42AE9";
        }
        else
        {
            fill = "Gray";
        }
        args.Fill = (Brush)new BrushConverter().ConvertFromString(fill);
        args.Stroke = new SolidColorBrush(Colors.Black);
    }
    //end eventHandler
}
