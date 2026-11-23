//begin imports
import com.infragistics.mobile.controls.IgaRingSeries;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaDataAdapter;
import java.util.Locale;
//end imports

//begin supportingTypes
public class DoughnutChartSelectionReadout {
    companion object {
        public fun show(series: IgaRingSeries, field: IgaPropertyEditorPropertyDescription, index: Int) {
            val source = series.dataSource;
            if (index < 0 || source == null) {
                field.primitiveValue = "No Selection";
                return;
            }
            val data = if (source is IgaDataAdapter) source else IgaDataAdapter.fromData(source);
            if (index >= data.count) {
                field.primitiveValue = "No Selection";
                return;
            }
            val item = data[index] as EnergyGlobalDemandItem;
            field.primitiveValue = item.Category.orEmpty() + " — " + String.format(Locale.ROOT, "%.0f", item.Value) + "%";
        }
    }
}
//end supportingTypes
