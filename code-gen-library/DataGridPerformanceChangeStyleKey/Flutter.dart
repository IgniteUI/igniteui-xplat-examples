//begin imports
import 'package:igniteui_flutter_grid/src/igf-cell-style-requested-event-args.dart';
//end imports

class DataGridPerformanceChangeStyleKey {
  //begin eventHandler
  void dataGridPerformanceChangeStyleKey(Object? sender, IgfCellStyleRequestedEventArgsState args) {
    args.styleKey = (args.resolvedValue as num) >= 0 ? 'priceAmountUp' : 'priceAmountDown';
  }
  //end eventHandler
}
