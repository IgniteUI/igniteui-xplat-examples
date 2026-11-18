//begin imports
import UIKit;
//end imports

public class CellValueChangingRejectEditNoMessage {
    //begin eventHandler
    public func cellValueChangingRejectEditNoMessage(sender: Any?, args: IgsGridCellValueChangingEventArgs?) {
        let grid = sender as! IgsDataGrid
        grid.rejectEdit(editID: args!.editID)
    }
    //end eventHandler
}
