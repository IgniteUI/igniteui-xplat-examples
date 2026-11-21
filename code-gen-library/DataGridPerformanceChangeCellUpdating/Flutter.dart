//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPerformanceChangeCellUpdating {
  //begin eventHandler
  void dataGridPerformanceChangeCellUpdating(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.change(args);
  }
  //end eventHandler
}
