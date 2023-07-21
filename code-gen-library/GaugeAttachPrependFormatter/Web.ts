//begin imports
import { IgcFormatLinearGraphLabelEventArgs } from 'igniteui-webcomponents-gauges';
//end imports

export class GaugeAttachPrependFormatter {
    //begin eventHandler
    public gaugeAttachPrependFormatter(sender: any, args: IgcFormatLinearGraphLabelEventArgs): void {
        args.label = "$" + args.label;
    }
    //end eventHandler
}