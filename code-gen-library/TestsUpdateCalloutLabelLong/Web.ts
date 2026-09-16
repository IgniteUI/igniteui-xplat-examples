//begin imports
import { IgcCalloutLabelUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsUpdateCalloutLabelLong
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public testsUpdateCalloutLabelLong(sender: any,args: IgcCalloutLabelUpdatingEventArgs)
    {
       args.label = args.label + " EXTENDED BY THE LABEL UPDATING EVENT";
    }
    //end eventHandler
}
