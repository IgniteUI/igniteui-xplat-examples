//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid.dart' show IgfGridState;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridPinSampleEmployeesOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void dataGridPinSampleEmployeesOnViewInit() {
        final grid = CodeGenHelper.getDescription<IgfGridState>('content')!;
        final data = CodeGenHelper.findByName<ArrayList<Object?>>('EmployeesSalesData')!;
        grid.i_IgfGrid.pinnedItems!.add(data[2]);
        grid.i_IgfGrid.pinnedItems!.add(data[4]);
    }
    //end eventHandler
}
