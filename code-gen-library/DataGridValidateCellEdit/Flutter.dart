//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/igf-grid-cell-value-changing-event-args.dart' show IgfGridCellValueChangingEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridValidateCellEdit {
    //begin eventHandler
    void dataGridValidateCellEdit(Object? sender, IgfGridCellValueChangingEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!;
        if (args.newValue == '') {
            grid.setEditError(args.editID, 'Error, cell is empty');
            grid.rejectEdit(args.editID);
        } else {
            grid.acceptEdit(args.editID);
        }
    }
    //end eventHandler
}
