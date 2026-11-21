//begin imports
import 'dart:async';
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart';
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

//begin supportingTypes
class DataGridPerformanceTicker {
  Timer? _timer;
  IgfDataGridState? _grid;
  final math.Random _random = math.Random();
  int interval = 100;
  int timerStep = 16;
  int toChangePerInterval = 200;
  bool get isTimerTicking => _timer != null;

  void start() {
    final target = CodeGenHelper.getDescription<IgfDataGridState>('content')!;
    if (isTimerTicking && identical(_grid, target)) return;
    stop();
    if (timerStep <= 0 || interval <= 0 || toChangePerInterval < 0) {
      throw ArgumentError('Invalid grid performance ticker interval or row count.');
    }
    _grid = target;
    final step = timerStep;
    var previousTick = 0;
    var elapsed = 0;
    var wasMounted = target.mounted;
    _timer = Timer.periodic(Duration(milliseconds: step), (timer) {
      if ((wasMounted && !target.mounted) ||
          !identical(CodeGenHelper.getDescription<IgfDataGridState>('content'), target)) {
        stop();
        return;
      }
      wasMounted = wasMounted || target.mounted;
      elapsed += (timer.tick - previousTick) * step;
      previousTick = timer.tick;
      final update = elapsed >= interval;
      if (update) elapsed %= interval;
      final source = target.dataSource;
      final List<Object?> rows;
      if (source is ArrayList) {
        rows = source.asArray().cast<Object?>();
      } else if (source is List) {
        rows = source.cast<Object?>();
      } else {
        throw StateError('Unsupported performance data source: ${source.runtimeType}');
      }
      final selected = <int>{};
      final count = update ? math.min(toChangePerInterval, rows.length) : 0;
      while (selected.length < count) selected.add(_random.nextInt(rows.length));
      final sorts = target.i_IgfDataGrid.sortDescriptions!;
      var sortingValues = false;
      for (var i = 0; i < sorts.count; i++) {
        final field = sorts[i]!.field ?? '';
        sortingValues = sortingValues || field == 'AvgSale' || field.contains('Change');
      }
      for (var i = 0; i < rows.length; i++) {
        final row = rows[i]!;
        if (selected.contains(i)) {
          if (sortingValues) target.notifyRemoveItem(i, row);
          final previous = DataGridSampleCells.number(row, 'AvgSale');
          final change = _random.nextDouble() * 40 - 20;
          DataGridSampleCells.setValue(row, 'Change', change);
          DataGridSampleCells.setValue(row, 'AvgSale', previous + change);
          DataGridSampleCells.setValue(row, 'PercentChange', previous == 0 ? 0.0 : (previous + change) / previous * 100);
          DataGridSampleCells.setValue(row, 'AvgSaleHeat', change >= 0 ? 1.0 : -1.0);
          if (sortingValues) {
            target.notifyInsertItem(i, row);
          } else {
            target.notifySetItem(i, row, row);
          }
        } else {
          final previous = DataGridSampleCells.number(row, 'AvgSaleHeat');
          final heat = previous > 0 ? math.max(0.0, previous - .06) : math.min(0.0, previous + .06);
          DataGridSampleCells.setValue(row, 'AvgSaleHeat', heat);
        }
      }
      if (!sortingValues || !update) target.invalidateVisibleRows();
    });
  }

  void stop() {
    _timer?.cancel();
    _timer = null;
    _grid = null;
  }
}
//end supportingTypes
