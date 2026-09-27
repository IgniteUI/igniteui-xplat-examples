//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import './AirplaneSeats.dart' show AirplaneSeatsItem;
//end imports
//begin eventHandler
void airplaneSeatFillStyling(Object? sender, IgfAssigningShapeStyleEventArgsState args) {
    // the event covers a range of items rather than one, so the record is asked for by index
    var record = args.getItems!(args.startIndex, args.endIndex)![0] as AirplaneSeatsItem?;
    args.opacity = 1.0;
    args.strokeThickness = 0.5;
    args.stroke = IgfSolidColorBrush.fromString("black");
    args.fill = IgfSolidColorBrush.fromString("white");
    if (record == null) {
        return;
    }
    // A seat is coloured by the cabin it is in, and a seat already sold is grey whichever cabin
    // that is -- so status is read after class rather than before it.
    switch (record.seatClass) {
        case "First":
            args.fill = IgfSolidColorBrush.fromString("dodgerblue");
            break;
        case "Business":
            args.fill = IgfSolidColorBrush.fromString("limegreen");
            break;
        case "Premium":
            args.fill = IgfSolidColorBrush.fromString("orange");
            break;
        case "Economy":
            args.fill = IgfSolidColorBrush.fromString("red");
            break;
    }
    if (record.status == "Sold") {
        args.fill = IgfSolidColorBrush.fromString("gray");
    }
}
//end eventHandler
