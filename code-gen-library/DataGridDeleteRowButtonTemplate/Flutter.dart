//begin template
//begin imports
import 'package:flutter/material.dart' show TextButton, Text;
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart' show IgfDataGridState;
import 'package:igniteui_flutter_grid/src/igf-template-column.dart' show IgfTemplateColumnState;
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart' show IgfTemplateCellUpdatingEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridDeleteRowButtonTemplate {
    //begin content
    void dataGridDeleteRowButtonTemplate(IgfTemplateColumnState sender, IgfTemplateCellUpdatingEventArgsState args) {
        final cell = args.cellInfo!;
        final row = cell.rowItem;
        args.content = TextButton(
            onPressed: cell.isDeleted ? null : () {
                CodeGenHelper.getDescription<IgfDataGridState>('content')!.removeItem(row);
            },
            child: const Text('Delete'));
    }
    //end content
}
//end template
