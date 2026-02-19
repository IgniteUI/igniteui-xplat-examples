//begin imports
using System;
using System.Collections;
using System.Collections.Generic;
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.CalloutLabelUpdatingEventHandler
    public string TestsUpdateCalloutLabelV(object sender, CalloutLabelUpdatingEventArgs item)
    {
        var item = args.Item;
        if (item is IDictionary<string, object>) {
            var dict = (IDictionary<string, object>)item;
            var label = dict.ContainsKey("Label") ? dict["Label"].ToString() : "";
            var value = dict.ContainsKey("Value") ? dict["Value"].ToString() : "";
            args.Label = label + "-V-" + value
        }

    }
    //end eventHandler
}
