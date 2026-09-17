//begin imports
//end imports

public class TestsUpdateCalloutLabelLong {
    //begin eventHandler
    //Swift: IgsCalloutLabelUpdatingEventArgs
    public func testsUpdateCalloutLabelLong(sender: Any?, args: IgsCalloutLabelUpdatingEventArgs?) {
        guard let args = args else { return }
        let current = (args.label as? CustomStringConvertible)?.description ?? ""
        args.label = "\(current) EXTENDED BY THE LABEL UPDATING EVENT" as Any
    }
    //end eventHandler
}
