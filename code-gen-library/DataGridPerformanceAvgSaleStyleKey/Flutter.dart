//begin imports
import 'package:igniteui_flutter_grid/src/igf-cell-style-requested-event-args.dart';
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

class DataGridPerformanceAvgSaleStyleKey {
  //begin eventHandler
  void dataGridPerformanceAvgSaleStyleKey(Object? sender, IgfCellStyleRequestedEventArgsState args) {
    final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
    final item = grid.actualDataSource!.getItemAtIndex(args.rowNumber);
    args.styleKey = DataGridSampleCells.number(item, 'Change') >= 0
        ? 'priceShiftUp' : 'priceShiftDown';
  }
  //end eventHandler
}
