//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid.dart' show IgfGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/DataGridLayoutState.dart' show DataGridLayoutState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridSaveLayout {
    //begin eventHandler
    void dataGridSaveLayout(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfGridState>('content')!.i_IgfGrid;
        final state = CodeGenHelper.getSharedSupporting<DataGridLayoutState>('DataGridLayoutState')!;
        state.savedLayout = grid.saveLayout();
    }
    //end eventHandler
}
