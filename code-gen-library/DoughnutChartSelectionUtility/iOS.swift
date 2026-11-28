//begin imports
import Foundation;
//end imports

//begin supportingTypes
public class DoughnutChartSelectionReadout {
    public static func show(series: IgsRingSeries, field: IgsPropertyEditorPropertyDescription, index: Int) {
        guard index >= 0, let data = series.dataSource, index < data.count,
              let item = data[index] as? EnergyGlobalDemandItem else {
            field.primitiveValue = "No Selection";
            return;
        }
        field.primitiveValue = (item.category ?? "") + " — " + String(format: "%.0f", item.value) + "%";
    }
}
//end supportingTypes
