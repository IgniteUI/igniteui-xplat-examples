//begin imports
using Infragistics.Controls.Charts;
using System;
//end imports

public class FormatLabelAsTest
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public void FormatLabelAsTest(object sender, AxisFormatLabelEventArgs args)
    {
        args.Label = "TEST";
    }
    //end eventHandler
}
