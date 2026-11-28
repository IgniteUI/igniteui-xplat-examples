//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridUndoEdit {
    //begin eventHandler
    void dataGridUndoEdit(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        CodeGenHelper.getDescription<IgfDataGridState>('content')!.undo();
    }
    //end eventHandler
}
