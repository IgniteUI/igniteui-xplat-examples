//begin imports
import 'package:igniteui_flutter_grid/src/igf-cell-style-requested-event-args.dart';
//end imports

class DataGridPerformancePercentStyleKey {
  //begin eventHandler
  void dataGridPerformancePercentStyleKey(Object? sender, IgfCellStyleRequestedEventArgsState args) {
    args.styleKey = (args.resolvedValue as num) >= 0 ? 'pricePercentUp' : 'pricePercentDown';
  }
  //end eventHandler
}
