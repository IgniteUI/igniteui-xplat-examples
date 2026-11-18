//begin template
//begin imports
import 'package:flutter/widgets.dart';
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart';
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectableData;
//end imports

class DataChartAirplaneSeatTooltipTemplate {
  //begin content
  void dataChartAirplaneSeatTooltipTemplate(
      Object? sender, ChartToolTipUpdatingEventArgs args) {
    final item = args.currentData?.item as IReflectableData?;
    if (item == null) return;
    args.currentView = Padding(
        padding: const EdgeInsets.all(5),
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Class: ${item.getValue('Class')}'),
              Text('Seat: ${item.getValue('Seat')}'),
              Text('Price: \$${item.getValue('Price')}'),
              Text('Status: ${item.getValue('Status')}')
            ]));
  }
  //end content
}
//end template
