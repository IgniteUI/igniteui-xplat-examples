//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Core.Graphics;
//end imports

public class AirplaneSeatStrokeStyling
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningShapeStyleEventHandler
    public void AirplaneSeatStrokeStyling(object sender, AssigningShapeStyleEventArgs args)
    {
        // the event covers a range of items rather than one, so the record is asked for by index
        var record = args.GetItems(args.StartIndex, args.EndIndex)[0] as AirplaneSeatsItem;

        args.Opacity = 1.0;
        args.StrokeThickness = 1.0;
        args.Stroke = new SolidColorBrush(Colors.Black);
        if (record == null)
        {
            return;
        }
        // A polyline has no inside to fill, so the cabin shows in the outline instead. A seat
        // already sold is grey whichever cabin that is -- so status is read after class.
        switch (record.Class)
        {
            case "First": args.Stroke = new SolidColorBrush(Colors.DodgerBlue); break;
            case "Business": args.Stroke = new SolidColorBrush(Colors.LimeGreen); break;
            case "Premium": args.Stroke = new SolidColorBrush(Colors.Orange); break;
            case "Economy": args.Stroke = new SolidColorBrush(Colors.Red); break;
        }
        if (record.Status == "Sold")
        {
            args.Stroke = new SolidColorBrush(Colors.Gray);
        }
    }
    //end eventHandler
}
