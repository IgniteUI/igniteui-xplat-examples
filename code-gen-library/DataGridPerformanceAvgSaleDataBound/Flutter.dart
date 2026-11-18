//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPerformanceAvgSaleDataBound {
  //begin eventHandler
  void dataGridPerformanceAvgSaleDataBound(Object? sender, IgfDataBindingEventArgsState args) {
    DataGridSampleCells.heat(args, 'AvgSaleHeat');
  }
  //end eventHandler
}
