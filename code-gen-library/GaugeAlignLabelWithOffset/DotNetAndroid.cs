//begin imports
using Infragistics.Controls.Gauges;
//end imports

public class GaugeAlignLabelWithOffset
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Gauges.AlignLinearGraphLabelHandler
    public void GaugeAlignLabelWithOffset(object sender, AlignLinearGraphLabelEventArgs args)
    {
        args.OffsetX += 15;
        args.OffsetY += 12;
    }
    //end eventHandler
}