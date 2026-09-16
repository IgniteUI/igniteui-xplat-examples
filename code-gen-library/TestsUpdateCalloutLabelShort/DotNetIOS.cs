//begin imports
using System;
using System.Collections;
using System.Collections.Generic;
using Infragistics.Controls.Charts;
//end imports

public class TestsUpdateCalloutLabelShort
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public void TestsUpdateCalloutLabelShort(object sender, CalloutLabelUpdatingEventArgs args)
    {
        args.Label = "X";
    }
    //end eventHandler
}
