//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_grid/src/igf-filter-operand.dart';
import 'package:igniteui_flutter_grid/src/EditorType.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridRegisterCustomAgeFilterOnViewInit {
  //begin eventHandler
  //Flutter: Action
  void dataGridRegisterCustomAgeFilterOnViewInit() {
    final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
    final age = IgfFilterOperandState()
      ..displayName = 'Filter As Class'
      ..isInputRequired = false
      ..editorType = EditorType.numeric;
    age.filterRequested = (_, args) {
      args.expression = args.filterFactory!.property(args.column!.field)!.isEqualTo1(30);
    };
    grid.actualColumns![1]!.filterOperands!.add(age.i_IgfFilterOperand);
    final sales = IgfFilterOperandState()
      ..displayName = '(Custom) In-Line Filter'
      ..isInputRequired = false
      ..editorType = EditorType.numeric;
    sales.filterRequested = (_, args) {
      args.expression = args.filterFactory!.property('Sales')!.isLessThanOrEqualTo1(300000);
    };
    grid.actualColumns![2]!.filterOperands!.add(sales.i_IgfFilterOperand);
  }
  //end eventHandler
}
