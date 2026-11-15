//begin imports
using System.Drawing;
using Infragistics.Win.DataVisualization;
//end imports

public class ShapeFileStyling
{
    //begin eventHandler
    //WindowsForms: Infragistics.Win.DataVisualization.AssigningShapeStyleEventHandler
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
        args.Fill = new SolidColorBrush(ColorTranslator.FromHtml(fill));
        args.Stroke = new SolidColorBrush(Color.Black);
    }
    //end eventHandler
}
