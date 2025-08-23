//begin imports
//end imports

public class GaugeAlignLabelWithOffset {
    //begin eventHandler
    public func gaugeAlignLabelWithOffset(sender: Any?, args: IgsAlignLinearGraphLabelEventArgs) {
        args.offsetX += 15
        args.offsetY += 12
    }
    //end eventHandler
}
