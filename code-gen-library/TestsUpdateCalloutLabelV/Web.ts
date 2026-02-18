//begin imports
import { IgcCalloutLabelUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public testsUpdateCalloutLabelV(IgcCalloutLabelUpdatingEventArgs: any): string
    {       
        args.label = args.label + "-V-" + args.value;
    }
    //end eventHandler
}