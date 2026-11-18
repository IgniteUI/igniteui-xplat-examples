//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/igf-grid-data-committing-event-args.dart' show IgfGridDataCommittingEventArgsState;
import 'package:igniteui_flutter_core/src/TransactionType.dart' show TransactionType;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridCommitUpdatesOnly {
    //begin eventHandler
    void dataGridCommitUpdatesOnly(Object? sender, IgfGridDataCommittingEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
        if (args.changes![0]!.transactionType == TransactionType.update) {
            grid.acceptCommit(args.commitID);
        } else {
            grid.rejectCommit(args.commitID);
        }
    }
    //end eventHandler
}
