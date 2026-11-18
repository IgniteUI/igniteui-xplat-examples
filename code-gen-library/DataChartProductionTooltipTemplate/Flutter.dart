//begin template
//begin imports
import 'package:flutter/widgets.dart';
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart';
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectableData;
import 'package:igniteui_flutter_charts/src/igf-series.dart';
//end imports

class DataChartProductionTooltipTemplate {
  //begin content
  void dataChartProductionTooltipTemplate(
      Object? sender, ChartToolTipUpdatingEventArgs args) {
    final item = args.currentData?.item as IReflectableData?;
    if (item == null) return;
    final brush = (sender as IgfSeriesState).actualBrush;
    args.currentView = Padding(
        padding: const EdgeInsets.all(5),
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('${item.getValue('Country')} Production',
                  style: TextStyle(fontWeight: FontWeight.bold,
                      color: brush is IgfSolidColorBrush ? brush.color : null)),
              for (final fuel in const ['Coal', 'Hydro', 'Nuclear', 'Gas', 'Oil'])
                Text('$fuel: ${_productionValue(item.getValue(fuel))}')
            ]));
  }
  //end content

  //begin supportingMethods
  String _productionValue(Object? value) {
    if (value is num && value == value.truncateToDouble()) {
      return value.toInt().toString();
    }
    return value?.toString() ?? '';
  }
  //end supportingMethods
}
//end template
