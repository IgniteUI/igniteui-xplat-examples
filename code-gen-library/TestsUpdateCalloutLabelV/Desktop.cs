//begin imports
using System;
using System.Collections;
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public string TestsUpdateCalloutLabelV(object sender, CalloutLabelUpdatingEventArgs item)
    {
        val item = args.item
        if (item is Map < *, *>) {
                    val dict = item
            val label = dict["Label"]?.toString().orEmpty()
            val value = dict["Value"]?.toString().orEmpty()
            args.label = "$label-V-$value"
        }

    }
    //end eventHandler
}