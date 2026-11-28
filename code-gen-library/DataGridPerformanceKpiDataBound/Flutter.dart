//begin imports
import 'dart:ui' show Color;
import 'package:igniteui_flutter_core/src/IgfBrush.dart';
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart';
//end imports

class DataGridPerformanceKpiDataBound {
  //begin eventHandler
  void dataGridPerformanceKpiDataBound(Object? sender, IgfDataBindingEventArgsState args) {
    final value = (args.resolvedValue as num).toDouble();
    args.cellInfo!.background = value < 20 ? IgfSolidColorBrush(const Color(0xffff134a))
        : value > 80 ? IgfSolidColorBrush(const Color(0xff4eb862)) : null;
  }
  //end eventHandler
}
