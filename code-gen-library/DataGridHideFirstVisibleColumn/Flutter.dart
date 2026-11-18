//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridHideFirstVisibleColumn {
    //begin eventHandler
    void dataGridHideFirstVisibleColumn(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
        final columns = grid.actualColumns!;
        for (var index = 0; index < columns.count; index++) {
            final column = columns[index]!;
            if (!column.isHidden) {
                column.isHidden = true;
                break;
            }
        }
    }
    //end eventHandler
}
