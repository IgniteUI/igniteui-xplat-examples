//begin imports
using System;
using System.Collections;
using System.Collections.Generic;
using Infragistics.Controls.Charts;
//end imports

public class TestsUpdateCalloutLabelLong
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public void TestsUpdateCalloutLabelLong(object sender, CalloutLabelUpdatingEventArgs args)
    {
        args.Label = args.Label + " EXTENDED BY THE LABEL UPDATING EVENT";
    }
    //end eventHandler
}
