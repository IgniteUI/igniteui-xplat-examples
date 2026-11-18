//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_grid/src/ColumnShowingAnimationMode.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class DataGridColumnAnimationOnViewInit {
  //begin eventHandler
  //Flutter: Action
  void dataGridColumnAnimationOnViewInit() {
    CodeGenHelper.getDescription<IgfDataGridState>('content')!
        .columnAddingAnimationMode = ColumnShowingAnimationMode.slideFromLeft;
  }
  //end eventHandler
}
