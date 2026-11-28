//begin imports
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridSalesGaugeTemplate {
  //begin eventHandler
  void dataGridSalesGaugeTemplate(Object? sender, IgfTemplateCellUpdatingEventArgsState args) {
    DataGridSampleCells.sales(args);
  }
  //end eventHandler
}
