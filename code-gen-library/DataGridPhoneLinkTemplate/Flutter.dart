//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPhoneLinkTemplate {
  //begin eventHandler
  void dataGridPhoneLinkTemplate(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.phone(args);
  }
  //end eventHandler
}
