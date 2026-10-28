//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart' show IgfDataBindingEventArgsState;
import 'package:igniteui_flutter_core/src/string.dart' show StringUtil;
//end imports

class OnBoundToValue {
    //begin eventHandler
    void onBoundToValue(Object? sender, IgfDataBindingEventArgsState args) {
        final cell = args.i_IgfDataBindingEventArgs.cellInfo!;
        cell.renderValue = cell.originalValue == null ? "" : StringUtil.objToString(cell.originalValue);
    }
    //end eventHandler
}
