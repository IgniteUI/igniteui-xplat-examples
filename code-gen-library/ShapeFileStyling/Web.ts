//begin imports
import { IgcAssigningShapeStyleEventArgs } from 'igniteui-webcomponents-charts';
import { IgcShapefileRecord } from 'igniteui-webcomponents-core';
//end imports

export class ShapeFileStyling {

    //begin eventHandler
    public shapeFileStyling(sender: any, args: IgcAssigningShapeStyleEventArgs): void {
        // conditional styling based on the Continent field loaded from the DBF file. The event
        // covers a range of items rather than one, so the record is asked for by index.
        var record = args.getItems(args.startIndex, args.endIndex)[0] as IgcShapefileRecord;
        var continent = record.getFieldValue("Continent");

        if (continent == "Africa") {
            args.fill = "#ECB912";
        } else if (continent == "Asia") {
            args.fill = "#E11D1D";
        } else if (continent == "Europe") {
            args.fill = "#2894EC";
        } else if (continent == "South America" || continent == "North America") {
            args.fill = "#0CC308";
        } else if (continent == "Australia") {
            args.fill = "#B42AE9";
        } else {
            args.fill = "gray";
        }
        args.stroke = "black";
    }
    //end eventHandler
}
