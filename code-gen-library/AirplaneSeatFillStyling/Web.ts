//begin imports
import { IgcAssigningShapeStyleEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class AirplaneSeatFillStyling {

    //begin eventHandler
    public airplaneSeatFillStyling(sender: any, args: IgcAssigningShapeStyleEventArgs): void {
        // the event covers a range of items rather than one, so the record is asked for by index
        var record = args.getItems(args.startIndex, args.endIndex)[0] as any;

        args.opacity = 1.0;
        args.strokeThickness = 0.5;
        args.stroke = "Black";
        args.fill = "White";
        if (record == null) {
            return;
        }
        // A seat is coloured by the cabin it is in, and a seat already sold is grey whichever cabin
        // that is -- so status is read after class rather than before it.
        switch (record.class) {
            case "First": args.fill = "DodgerBlue"; break;
            case "Business": args.fill = "LimeGreen"; break;
            case "Premium": args.fill = "Orange"; break;
            case "Economy": args.fill = "Red"; break;
        }
        if (record.status === "Sold") {
            args.fill = "Gray";
        }
    }
    //end eventHandler
}
