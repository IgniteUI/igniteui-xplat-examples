//begin imports
//end imports

public class OnBoundToRowIndex {
    //begin eventHandler
    public func onBoundToRowIndex(sender: Any?, args: IgsDataBindingEventArgs?) {
        guard let cellInfo = args?.cellInfo else { return }
        cellInfo.renderValue = String(cellInfo.dataRow)
    }
    //end eventHandler
}
