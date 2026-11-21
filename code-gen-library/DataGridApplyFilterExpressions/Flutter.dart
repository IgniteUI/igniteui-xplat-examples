//begin imports
import 'package:igniteui_flutter_core/src/FilterFactory.dart';
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart';
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridApplyFilterExpressions {
  //begin eventHandler
  void dataGridApplyFilterExpressions(Object? sender,
      IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!.i_IgfDataGrid;
    Object? value(String name) => CodeGenHelper
        .findByName<IgfPropertyEditorPropertyDescriptionState>(name)!.primitiveValue;
    final text = value('FilterTextEditor')?.toString() ?? '';
    grid.filterExpressions!.clear();
    if (text.isEmpty) return;
    final column = FilterFactory().property(value('FilterColumnEditor') as String)!.toUpper();
    final expression = text.toUpperCase();
    switch (value('FilterModeEditor')) {
      case 'StartsWith':
        grid.filterExpressions!.add(column!.startsWith1(expression));
        break;
      case 'EndsWith':
        grid.filterExpressions!.add(column!.endsWith1(expression));
        break;
      default:
        grid.filterExpressions!.add(column!.contains1(expression));
    }
  }
  //end eventHandler
}
