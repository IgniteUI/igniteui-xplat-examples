//begin imports
import { IgcAlignLinearGraphLabelEventArgs } from 'igniteui-webcomponents-gauges';
//end imports

export class GaugeAlignLabelWithOffset {
    //begin eventHandler
    public gaugeAlignLabelWithOffset(sender: any, args: IgcAlignLinearGraphLabelEventArgs): void {
        args.offsetX += 15;
        args.offsetY += 12;
    }
    //end eventHandler
}