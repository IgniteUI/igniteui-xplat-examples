//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid.dart' show IgfGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_grid/src/PinnedPositions.dart' show PinnedPositions;
//end imports

class DataGridPinAddressColumnsRight {
    //begin eventHandler
    void dataGridPinAddressColumnsRight(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfGridState>('content')!.i_IgfGrid;
        for (final index in [6, 7, 8]) {
            grid.pinColumn(grid.actualColumns![index], PinnedPositions.right);
        }
    }
    //end eventHandler
}
