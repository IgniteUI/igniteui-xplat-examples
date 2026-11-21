//begin imports
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DataGridPerformanceTicker.dart';
//end imports

class DataGridPerformanceTickerOnViewInit {
  //begin eventHandler
  //Flutter: Action
  void dataGridPerformanceTickerOnViewInit() {
    CodeGenHelper.getSharedSupporting<DataGridPerformanceTicker>('DataGridPerformanceTicker')!.start();
  }
  //end eventHandler
}
