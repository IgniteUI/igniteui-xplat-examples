//begin imports
import 'package:igniteui_flutter_grid/src/igf-cell-style-requested-event-args.dart';
//end imports

class DataGridPerformanceKpiStyleKey {
  //begin eventHandler
  void dataGridPerformanceKpiStyleKey(Object? sender, IgfCellStyleRequestedEventArgsState args) {
    final value = (args.resolvedValue as num).toDouble();
    args.styleKey = value < 20 ? 'kpi_red' : value > 80 ? 'kpi_green' : null;
  }
  //end eventHandler
}
