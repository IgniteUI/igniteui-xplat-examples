//begin imports
import { IgcStyleShapeEventArgs } from 'igniteui-webcomponents-charts';
import { IgcShapefileRecord } from 'igniteui-webcomponents-core';
//end imports

export class ShapeFileStyling {

    //begin eventHandler
    public shapeFileStyling(sender: any, args: IgcStyleShapeEventArgs): void {
        // conditional styling based on the Continent field loaded from the DBF file
        var record = args.item as IgcShapefileRecord;
        var continent = record.getFieldValue("Continent");

        if (continent == "Africa") {
            args.shapeFill = "#ECB912";
        } else if (continent == "Asia") {
            args.shapeFill = "#E11D1D";
        } else if (continent == "Europe") {
            args.shapeFill = "#2894EC";
        } else if (continent == "South America" || continent == "North America") {
            args.shapeFill = "#0CC308";
        } else if (continent == "Australia") {
            args.shapeFill = "#B42AE9";
        } else {
            args.shapeFill = "gray";
        }
        args.shapeStroke = "black";
    }
    //end eventHandler
}
