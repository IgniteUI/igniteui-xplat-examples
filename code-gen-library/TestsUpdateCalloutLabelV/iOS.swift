//begin imports
//end imports

public class TestsUpdateCalloutLabelV {
    //begin eventHandler
    //Swift: IgsCalloutLabelUpdatingEventArgs
    public func testsUpdateCalloutLabelV(sender: Any?, args: IgsCalloutLabelUpdatingEventArgs?) {
        guard let args = args else { return }
        if let dict = args.item as? DictionaryDataItem$2<String?, Any?> {
            let label = (dict["Label"] as? CustomStringConvertible)?.description ?? ""
            let rawValue = dict["Value"]
            var value = ""
            if let d = rawValue as? Double, d.rounded() == d {
                value = String(Int64(d))
            } else {
                value = (rawValue as? CustomStringConvertible)?.description ?? ""
            }
            args.label = "\(label)-V-\(value)" as Any
        }
    }
    //end eventHandler
}
