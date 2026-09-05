//begin imports
using IgniteUI.Blazor.Controls;
using System.Collections;
//end imports

public class AirplaneSeatFillStyling
{
    //begin eventHandler
    public void AirplaneSeatFillStyling(IgbAssigningShapeStyleEventArgs args)
    {
        // The current Blazor event exposes the range indices but not the web getItems callback, so
        // use that index against the same named collection the series is bound to.
        var seats = CodeGenHelper.FindByName<IList>("AirplaneSeats");
        dynamic record = seats[args.StartIndex];

        args.Opacity = 1.0;
        args.StrokeThickness = 0.5;
        args.Stroke = "Black";
        args.Fill = "White";
        if (record == null) return;

        // A seat is coloured by the cabin it is in, and a seat already sold is grey whichever cabin
        // that is -- so status is read after class rather than before it.
        switch ((string)record.Class)
        {
            case "First": args.Fill = "DodgerBlue"; break;
            case "Business": args.Fill = "LimeGreen"; break;
            case "Premium": args.Fill = "Orange"; break;
            case "Economy": args.Fill = "Red"; break;
        }
        if ((string)record.Status == "Sold") args.Fill = "Gray";
    }
    //end eventHandler
}
