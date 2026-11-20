//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/igf-grid-cell-value-changing-event-args.dart' show IgfGridCellValueChangingEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class CellValueChangingRejectEdit
{
//begin eventHandler
    void cellValueChangingRejectEdit(Object? sender, IgfGridCellValueChangingEventArgsState args) {
        var grid = CodeGenHelper.getDescription<IgfDataGridState>("content");
        if (grid == null) return;
        grid.setEditError(args.editID, "Edit canceled");
    }
//end eventHandler
}
