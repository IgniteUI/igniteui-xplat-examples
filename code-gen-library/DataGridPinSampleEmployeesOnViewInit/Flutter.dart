//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridPinSampleEmployeesOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void dataGridPinSampleEmployeesOnViewInit() {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!;
        final data = CodeGenHelper.findByName<ArrayList<Object?>>('EmployeesSalesData')!;
        grid.i_IgfDataGrid.pinnedItems!.add(data[2]);
        grid.i_IgfDataGrid.pinnedItems!.add(data[4]);
    }
    //end eventHandler
}
