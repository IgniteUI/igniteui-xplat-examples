//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPriceCellUpdating {
  //begin eventHandler
  void dataGridPriceCellUpdating(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.price(args, arrow: true);
  }
  //end eventHandler
}
