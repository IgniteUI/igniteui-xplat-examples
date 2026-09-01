//begin imports
using IgniteUI.Blazor.Controls;
using System.Collections;
//end imports

public class AirplaneSeatStrokeStyling
{
    //begin eventHandler
    public void AirplaneSeatStrokeStyling(IgbAssigningShapeStyleEventArgs args)
    {
        // The current Blazor event exposes the range indices but not the web getItems callback, so
        // use that index against the same named collection the series is bound to.
        var seats = CodeGenHelper.FindByName<IList>("AirplaneSeats");
        dynamic record = seats[args.StartIndex];

        args.Opacity = 1.0;
        args.StrokeThickness = 1.0;
        args.Stroke = "Black";
        if (record == null) return;

        // A polyline has no inside to fill, so the cabin shows in the outline instead. A seat
        // already sold is grey whichever cabin that is -- so status is read after class.
        switch ((string)record.Class)
        {
            case "First": args.Stroke = "DodgerBlue"; break;
            case "Business": args.Stroke = "LimeGreen"; break;
            case "Premium": args.Stroke = "Orange"; break;
            case "Economy": args.Stroke = "Red"; break;
        }
        if ((string)record.Status == "Sold") args.Stroke = "Gray";
    }
    //end eventHandler
}
