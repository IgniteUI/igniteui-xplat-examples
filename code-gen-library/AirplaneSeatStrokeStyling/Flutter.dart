//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart' show IgfAssigningShapeStyleEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import './AirplaneSeats.dart' show AirplaneSeatsItem;
//end imports
//begin eventHandler
void airplaneSeatStrokeStyling(Object? sender, IgfAssigningShapeStyleEventArgsState args) {
    // the event covers a range of items rather than one, so the record is asked for by index
    var record = args.getItems!(args.startIndex, args.endIndex)![0] as AirplaneSeatsItem?;
    args.opacity = 1.0;
    args.strokeThickness = 1.0;
    args.stroke = IgfSolidColorBrush.fromString("black");
    if (record == null) {
        return;
    }
    // A polyline has no inside to fill, so the cabin shows in the outline instead. A seat
    // already sold is grey whichever cabin that is -- so status is read after class.
    switch (record.seatClass) {
        case "First":
            args.stroke = IgfSolidColorBrush.fromString("dodgerblue");
            break;
        case "Business":
            args.stroke = IgfSolidColorBrush.fromString("limegreen");
            break;
        case "Premium":
            args.stroke = IgfSolidColorBrush.fromString("orange");
            break;
        case "Economy":
            args.stroke = IgfSolidColorBrush.fromString("red");
            break;
    }
    if (record.status == "Sold") {
        args.stroke = IgfSolidColorBrush.fromString("gray");
    }
}
//end eventHandler
