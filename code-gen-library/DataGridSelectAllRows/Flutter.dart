//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridSelectAllRows {
    //begin eventHandler
    void dataGridSelectAllRows(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!;
        grid.selectAllRows();
    }
    //end eventHandler
}
