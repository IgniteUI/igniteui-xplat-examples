//begin imports
import UIKit;
//end imports

public class CellValueChangingRejectEdit {
    //begin eventHandler
    public func cellValueChangingRejectEdit(sender: Any?, args: IgsGridCellValueChangingEventArgs?) {
        let grid = sender as! IgsDataGrid
        grid.setEditError(editID: args!.editID, errorMessage: "Edit canceled")
    }
    //end eventHandler
}
