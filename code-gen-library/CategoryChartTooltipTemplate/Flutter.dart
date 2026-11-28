//begin template
//begin imports
import 'package:flutter/widgets.dart';
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart';
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectableData;
//end imports

class CategoryChartTooltipTemplate {
  //begin content
  void categoryChartTooltipTemplate(Object? sender, ChartToolTipUpdatingEventArgs args) {
    final item = args.currentData?.item as IReflectableData?;
    if (item == null) return;
    args.currentView = Padding(
        padding: const EdgeInsets.all(5),
        child: Column(mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('Franchise: ${item.getValue('Franchise')}',
              style: const TextStyle(fontWeight: FontWeight.bold)),
          Text('Revenue of All Movies: ${item.getValue('TotalRevenue')}'),
          Text('Highest Grossing Movie: \$${item.getValue('HighestGrossing')}')
        ]));
  }
  //end content
}
//end template
