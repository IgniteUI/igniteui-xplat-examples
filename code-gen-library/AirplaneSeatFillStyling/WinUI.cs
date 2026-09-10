//begin imports
using Infragistics.Controls.Charts;
//end imports

public class AirplaneSeatFillStyling
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningShapeStyleEventHandler
    public void AirplaneSeatFillStyling(object sender, AssigningShapeStyleEventArgs args)
    {
        // the event covers a range of items rather than one, so the record is asked for by index
        var record = args.GetItems(args.StartIndex, args.EndIndex)[0] as AirplaneSeatsItem;

        args.Opacity = 1.0;
        args.StrokeThickness = 0.5;
        args.Stroke = new SolidColorBrush(Colors.Black);
        args.Fill = new SolidColorBrush(Colors.White);
        if (record == null)
        {
            return;
        }
        // A seat is coloured by the cabin it is in, and a seat already sold is grey whichever cabin
        // that is -- so status is read after class rather than before it.
        switch (record.Class)
        {
            case "First": args.Fill = new SolidColorBrush(Colors.DodgerBlue); break;
            case "Business": args.Fill = new SolidColorBrush(Colors.LimeGreen); break;
            case "Premium": args.Fill = new SolidColorBrush(Colors.Orange); break;
            case "Economy": args.Fill = new SolidColorBrush(Colors.Red); break;
        }
        if (record.Status == "Sold")
        {
            args.Fill = new SolidColorBrush(Colors.Gray);
        }
    }
    //end eventHandler
}
