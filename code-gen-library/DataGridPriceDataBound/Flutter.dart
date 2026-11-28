//begin imports
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart';
import 'package:igniteui_flutter_library/DataGridSampleCells.dart';
import 'package:igniteui_flutter_library/DataGridLiveState.dart';
//end imports

class DataGridPriceDataBound {
  //begin eventHandler
  void dataGridPriceDataBound(Object? sender, IgfDataBindingEventArgsState args) {
    DataGridSampleCells.heat(args, 'PriceHeat', transparent: true,
        enabled: DataGridLiveState.current.useHeat);
  }
  //end eventHandler
}
