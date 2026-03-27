//begin imports
//end imports

public class TestsUpdateCalloutLabelV {
    //begin eventHandler
    //Swift: IgsCalloutLabelUpdatingEventArgs
    public func testsUpdateCalloutLabelV(sender: Any?, args: IgsCalloutLabelUpdatingEventArgs?) {
        guard let args = args else { return }
        if let dict = args.item as? NSDictionary {
            let label = (dict["Label"] as? CustomStringConvertible)?.description ?? ""
            let value = (dict["Value"] as? CustomStringConvertible)?.description ?? ""
            args.label = "\(label)-V-\(value)" as Any
        }
    }
    //end eventHandler
}
