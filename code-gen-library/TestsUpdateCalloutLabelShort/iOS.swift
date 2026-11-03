//begin imports
//end imports

public class TestsUpdateCalloutLabelShort {
    //begin eventHandler
    //Swift: IgsCalloutLabelUpdatingEventArgs
    public func testsUpdateCalloutLabelShort(sender: Any?, args: IgsCalloutLabelUpdatingEventArgs?) {
        guard let args = args else { return }
        args.label = "X" as Any
    }
    //end eventHandler
}
