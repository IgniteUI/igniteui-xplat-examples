//begin imports
//end imports

public class OnBoundToValue {
    //begin eventHandler
    public func onBoundToValue(sender: Any?, args: IgsDataBindingEventArgs?) {
        guard let cellInfo = args?.cellInfo else { return }
        // StringUtil.toString is the translated stand-in for C#'s object.ToString(), which is what
        // the other heads call here. Swift's own String(describing:) keeps a whole double's
        // fraction, so a value of 30 would render "30.0" where every other platform shows "30".
        cellInfo.renderValue = StringUtil.toString(obj: cellInfo.originalValue)
    }
    //end eventHandler
}
