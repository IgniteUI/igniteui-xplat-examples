//begin imports
import 'dart:async';
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart';
import 'package:igniteui_flutter_core/src/ListSortDirection.dart';
import 'package:igniteui_flutter_grid/src/igf-data-grid.dart';
import 'package:igniteui_flutter_grid/src/ColumnGroupDescription.dart';
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart';
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/PortfolioData.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
//end imports

//begin supportingTypes
abstract class DataGridLiveState {
  static final _states = Expando<DataGridLiveSettings>('live grid sample');
  static DataGridLiveSettings get current {
    final grid = CodeGenHelper.getDescription<IgfDataGridState>('content')!;
    return _states[grid] ??= DataGridLiveSettings(grid);
  }
}

class DataGridLiveSettings {
  DataGridLiveSettings(this.grid);
  final IgfDataGridState grid;
  final math.Random _random = math.Random();
  Timer? _timer;
  bool useHeat = true;
  bool useRowGrouping = true;
  bool running = false;
  bool updatingAll = false;
  int frequency = 1000;

  void group(bool enabled) {
    useRowGrouping = enabled;
    final groups = grid.i_IgfDataGrid.groupDescriptions!;
    groups.clear();
    if (enabled) {
      for (final field in const ['Category', 'Type', 'Contract']) {
        groups.add(ColumnGroupDescription()
          ..field = field
          ..sortDirection = ListSortDirection.descending);
      }
    }
  }

  void toggleHeat(bool enabled) {
    useHeat = enabled;
    grid.invalidateVisibleRows();
  }

  void _label(String name, String label) {
    CodeGenHelper.findByName<IgfPropertyEditorPropertyDescriptionState>(name)
        ?.primitiveValue = label;
  }

  void toggle(bool all) {
    if (running && updatingAll != all) return;
    if (running) {
      stop();
    } else {
      updatingAll = all;
      running = true;
      _label(all ? 'LiveAllPricesEditor' : 'LiveSomePricesEditor',
          all ? 'Stop All Prices' : 'Stop Prices');
      var wasMounted = grid.mounted;
      _timer = Timer.periodic(Duration(milliseconds: frequency), (_) {
        if ((wasMounted && !grid.mounted) ||
            !identical(CodeGenHelper.getDescription<IgfDataGridState>('content'), grid)) {
          stop(updateLabels: false);
          return;
        }
        wasMounted = wasMounted || grid.mounted;
        _tick();
      });
    }
  }

  void stop({bool updateLabels = true}) {
    _timer?.cancel();
    _timer = null;
    running = false;
    if (updateLabels) {
      _label('LiveAllPricesEditor', 'Live All Prices');
      _label('LiveSomePricesEditor', 'Live Prices');
    }
  }

  void _tick() {
    final source = grid.dataSource;
    final List<Object?> rows;
    if (source is ArrayList) {
      rows = source.asArray().cast<Object?>();
    } else if (source is List) {
      rows = source.cast<Object?>();
    } else {
      throw StateError('Unsupported live grid data source: ${source.runtimeType}');
    }
    if (rows.isEmpty) return;
    final selected = <int>{};
    if (!updatingAll) {
      final count = rows.length < 3 ? rows.length : 2 + _random.nextInt(rows.length - 2);
      while (selected.length < count) selected.add(_random.nextInt(rows.length));
    }
    final sorts = grid.i_IgfDataGrid.sortDescriptions!;
    var sortingPrices = false;
    for (var i = 0; i < sorts.count; i++) {
      final field = sorts[i]!.field ?? '';
      sortingPrices = sortingPrices || field == 'Price' || field.contains('Change');
    }
    for (var i = 0; i < rows.length; i++) {
      final item = rows[i]!;
      if (updatingAll || selected.contains(i)) {
        if (sortingPrices && !updatingAll) grid.notifyRemoveItem(i, item);
        final change = PortfolioDataRandomizer.getPriceChange(DataGridSampleCells.number(item, 'Price'));
        DataGridSampleCells.setValue(item, 'Price', change.newPrice);
        DataGridSampleCells.setValue(item, 'Change', change.byAmount);
        DataGridSampleCells.setValue(item, 'ChangePercent', change.percentage);
        DataGridSampleCells.setValue(item, 'PriceHeat', useHeat ? (change.byAmount >= 0 ? 1.0 : -1.0) : 0.0);
        if (!updatingAll) {
          if (sortingPrices) {
            grid.notifyInsertItem(i, item);
          } else {
            grid.notifySetItem(i, item, item);
          }
        }
      } else {
        final oldHeat = DataGridSampleCells.number(item, 'PriceHeat');
        final heat = !useHeat ? 0.0 : oldHeat > 0 ? math.max(0.0, oldHeat - .06) : math.min(0.0, oldHeat + .06);
        DataGridSampleCells.setValue(item, 'PriceHeat', heat);
      }
    }
    if (updatingAll) grid.notifyClearItems();
    grid.invalidateVisibleRows();
  }
}
//end supportingTypes
