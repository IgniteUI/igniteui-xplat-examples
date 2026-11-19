//begin imports
//end imports

public class OnBoundToRowIndex {
    //begin eventHandler
    public func onBoundToRowIndex(sender: Any?, args: IgsDataBindingEventArgs?) {
        args!.cellInfo!.renderValue = String(args!.cellInfo!.dataRow)
    }
    //end eventHandler
}
