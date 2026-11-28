//begin imports
import 'package:igniteui_flutter_charts/src/igf-ring-series.dart' show IgfRingSeriesState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart' show IgfPropertyEditorPropertyDescriptionState;
import 'package:igniteui_flutter_library/EnergyGlobalDemand.dart' show EnergyGlobalDemandItem;
//end imports

//begin supportingTypes
class DoughnutChartSelectionReadout {
    static void show(IgfRingSeriesState series, IgfPropertyEditorPropertyDescriptionState field, int index) {
        final data = series.dataSource;
        if (index < 0 || data == null || index >= data.length) {
            field.primitiveValue = 'No Selection';
            return;
        }
        final item = data[index] as EnergyGlobalDemandItem;
        field.primitiveValue = '${item.Category} — ${item.Value.toStringAsFixed(0)}%';
    }
}
//end supportingTypes
