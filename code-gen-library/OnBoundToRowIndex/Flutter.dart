//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart' show IgfDataBindingEventArgsState;
//end imports

class OnBoundToRowIndex {
    //begin eventHandler
    void onBoundToRowIndex(Object? sender, IgfDataBindingEventArgsState args) {
        final cell = args.cellInfo!;
        cell.renderValue = cell.dataRow.toString();
    }
    //end eventHandler
}
