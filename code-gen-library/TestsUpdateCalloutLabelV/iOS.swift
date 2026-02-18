//begin imports
//end imports

public class TestsUpdateCalloutLabelV {
    //begin eventHandler
    //Swift: Any?___String?
    public func testsUpdateCalloutLabelV(sender: Any?, args: Any?) -> void? {
        
        let item = args.item
        if let dict = item as? NSDictionary {
            let label = (dict["Label"] as? CustomStringConvertible)?.description ?? ""
            let value = (dict["Value"] as? CustomStringConvertible)?.description ?? ""
            args.label = "\(label)-V-\(value)"
        }

    }
    //end eventHandler
}
