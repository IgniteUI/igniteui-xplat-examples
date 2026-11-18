//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/DataGridLayoutState.dart' show DataGridLayoutState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridLoadLayout {
    //begin eventHandler
    void dataGridLoadLayout(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final state = CodeGenHelper.getSharedSupporting<DataGridLayoutState>('DataGridLayoutState')!;
        final layout = state.savedLayout;
        if (layout != null && layout.isNotEmpty) {
            CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid.loadLayout(layout);
        }
    }
    //end eventHandler
}
