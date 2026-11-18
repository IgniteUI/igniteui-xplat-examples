//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid.dart' show IgfGridState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'dart:math' as math;
import 'package:igniteui_flutter_library/EmployeesSalesData.dart' show EmployeesSalesData;
//end imports

class DataGridReloadSalaryData {
    //begin eventHandler
    final math.Random _random = math.Random();

    void dataGridReloadSalaryData(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final grid = CodeGenHelper.getDescription<IgfGridState>('content')!.i_IgfGrid;
        final data = CodeGenHelper.findByName<EmployeesSalesData>('EmployeesSalesData')!;
        for (var index = 0; index < data.count; index++) {
            final item = data[index]!;
            item.salary = (60000 + _random.nextDouble() * 140000).roundToDouble();
            grid.notifySetItem(index, item, item);
        }
    }
    //end eventHandler
}
