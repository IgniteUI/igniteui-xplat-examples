//begin imports
using Infragistics.Controls.Charts;
using System;
//end imports

public class FormatLabelAsLongLongTest
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public void FormatLabelAsLongLongTest(object sender, AxisFormatLabelEventArgs args)
    {
        args.Label = "LONGLONGTEST";
    }
    //end eventHandler
}
