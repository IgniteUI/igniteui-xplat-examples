//begin imports
using System;
using System.Collections;
using System.Collections.Generic;
using Infragistics.Controls.Charts;
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public void TestsUpdateCalloutLabelV(object sender, CalloutLabelUpdatingEventArgs args)
    {
        var item = args.Item;        
        if (item is IDictionary)
        {
            var dict = (IDictionary)item;
            args.Label = dict["Label"] + "-V-" + dict["Value"];
        }
    }
    //end eventHandler
}
