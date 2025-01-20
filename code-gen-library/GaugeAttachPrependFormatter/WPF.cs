//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class GaugeAttachPrependFormatter
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Gauges.FormatLinearGraphLabelHandler
    public void GaugeAttachPrependFormatter(object sender, FormatLinearGraphLabelEventArgs args)
    {
        args.Label = "$" + args.Label;
    }
    //end eventHandler
}