//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPerformanceAvgSaleCellUpdating {
  //begin eventHandler
  void dataGridPerformanceAvgSaleCellUpdating(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.price(args);
  }
  //end eventHandler
}
