//begin imports
//end imports

public class GaugeAttachPrependFormatter {
    //begin eventHandler
    public func gaugeAttachPrependFormatter(sender: Any?, args: IgsFormatLinearGraphLabelEventArgs?) {
        args!.label = "$" + args!.label!
    }
    //end eventHandler
}
