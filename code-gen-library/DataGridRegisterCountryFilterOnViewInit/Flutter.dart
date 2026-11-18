//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/igf-filter-operand.dart' show IgfFilterOperandState;
import 'package:igniteui_flutter_grid/src/EditorType.dart' show EditorType;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridRegisterCountryFilterOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void dataGridRegisterCountryFilterOnViewInit() {
        final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
        final operand = IgfFilterOperandState()
            ..editorType = EditorType.text
            ..displayName = '(Custom) In Code Filter';
        operand.filterRequested = (sender, args) {
            final property = args.filterFactory!.property(args.column!.field);
            args.expression = property!.isEqualTo1('France');
        };
        grid.actualColumns![0]!.filterOperands!.add(operand.i_IgfFilterOperand);
    }
    //end eventHandler
}
