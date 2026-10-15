//begin imports
import { IgcCalloutLabelUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class TestsUpdateCalloutLabelShort
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public testsUpdateCalloutLabelShort(sender: any,args: IgcCalloutLabelUpdatingEventArgs)
    {
       args.label = "X";
    }
    //end eventHandler
}
