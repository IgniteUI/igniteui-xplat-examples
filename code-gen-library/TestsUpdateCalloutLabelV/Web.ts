//begin imports
import { IgcCalloutLabelUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public testsUpdateCalloutLabelV(sender: any,args: IgcCalloutLabelUpdatingEventArgs)
    {       
       args.label = args.item["Label"] + "-V-" + args.item["Value"];
    }
    //end eventHandler
}