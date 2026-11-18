//begin imports
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DataGridPerformanceTicker.dart';
//end imports

class DataGridPerformanceTickerOnViewDestroy {
  //begin eventHandler
  //Flutter: Action
  void dataGridPerformanceTickerOnViewDestroy() {
    CodeGenHelper.getSharedSupporting<DataGridPerformanceTicker>('DataGridPerformanceTicker')!.stop();
  }
  //end eventHandler
}
