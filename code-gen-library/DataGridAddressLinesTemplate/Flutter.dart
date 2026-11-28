//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridAddressLinesTemplate {
  //begin eventHandler
  void dataGridAddressLinesTemplate(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.address(args);
  }
  //end eventHandler
}
