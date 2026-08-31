//begin imports
import { IgcAssigningShapeStyleEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class AirplaneSeatStrokeStyling {

    //begin eventHandler
    public airplaneSeatStrokeStyling(sender: any, args: IgcAssigningShapeStyleEventArgs): void {
        // the event covers a range of items rather than one, so the record is asked for by index
        var record = args.getItems(args.startIndex, args.endIndex)[0] as any;

        args.opacity = 1.0;
        args.strokeThickness = 1.0;
        args.stroke = "Black";
        if (record == null) {
            return;
        }
        // A polyline has no inside to fill, so the cabin shows in the outline instead. A seat
        // already sold is grey whichever cabin that is -- so status is read after class.
        switch (record.class) {
            case "First": args.stroke = "DodgerBlue"; break;
            case "Business": args.stroke = "LimeGreen"; break;
            case "Premium": args.stroke = "Orange"; break;
            case "Economy": args.stroke = "Red"; break;
        }
        if (record.status === "Sold") {
            args.stroke = "Gray";
        }
    }
    //end eventHandler
}
