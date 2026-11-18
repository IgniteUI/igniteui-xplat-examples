//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/PinnedPositions.dart' show PinnedPositions;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridPinIdAndNameColumnsLeft {
    //begin eventHandler
    void dataGridPinIdAndNameColumnsLeft(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
        for (var index = 0; index < 3; index++) {
            grid.pinColumn(grid.actualColumns![index], PinnedPositions.left);
        }
    }
    //end eventHandler
}
