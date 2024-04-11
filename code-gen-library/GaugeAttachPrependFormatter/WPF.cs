//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class GaugeAttachPrependFormatter
{
    //begin eventHandler
    public void GaugeAttachPrependFormatter(object sender, FormatLinearGraphLabelEventArgs args)
    {
        args.Label = "$" + args.Label;
    }
    //end eventHandler
}