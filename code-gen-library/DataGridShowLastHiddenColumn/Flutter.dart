//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid.dart' show IgfGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridShowLastHiddenColumn {
    //begin eventHandler
    void dataGridShowLastHiddenColumn(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfGridState>('content')!.i_IgfGrid;
        final columns = grid.actualColumns!;
        for (var index = columns.count - 1; index >= 0; index--) {
            final column = columns[index]!;
            if (column.isHidden) {
                column.isHidden = false;
                break;
            }
        }
    }
    //end eventHandler
}
