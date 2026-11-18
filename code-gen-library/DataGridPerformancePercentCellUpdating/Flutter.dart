//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPerformancePercentCellUpdating {
  //begin eventHandler
  void dataGridPerformancePercentCellUpdating(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.change(args, percent: true);
  }
  //end eventHandler
}
