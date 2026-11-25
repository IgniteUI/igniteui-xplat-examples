//begin imports
import android.util.Log;
import android.widget.TextView;
import com.infragistics.mobile.controls.*;
//end imports

public class TestsDoughnutTooltips {
    //begin eventHandler
    //Kotlin: Action
    public fun testsDoughnutTooltips() {
        val json = CodeGenHelper.findByName<JsonDictionaryValue>("TestsDoughnutTooltipBindings")?.value as? String;
        if (json == null) {
            Log.e("XSharpTesting", "Doughnut tooltip bindings were not provided");
            return;
        }
        val bindings = JsonDictionaryParser().parse(json) as? JsonDictionaryObject;
        if (bindings == null) {
            Log.e("XSharpTesting", "Doughnut tooltip bindings must be an object");
            return;
        }
        for (name in bindings.getKeys()!!) {
            val series = CodeGenHelper.findByName<IgaRingSeriesBase>(name);
            if (series == null) {
                Log.e("XSharpTesting", "Missing tooltip series: $name");
                return;
            }
            val model = series.getImplementation() as RingSeriesBase;
            val member = (bindings[name] as? JsonDictionaryValue)?.value as? String;
            if (member == null) {
                model.toolTip = null;
                continue;
            }
            if (member != "Value" && member != "Label") {
                Log.e("XSharpTesting", "Unsupported doughnut tooltip member: $member");
                return;
            }
            val context = series.chart?.context;
            if (context == null) {
                Log.e("XSharpTesting", "Tooltip series has no chart context: $name");
                return;
            }
            val getter = FastReflectionHelper();
            getter.propertyName = series.valueMemberPath;
            val adapter = ChartToolTipAdapter(series);
            adapter.chartTooltipUpdating = object : IgaChartToolTipUpdatingEventHandler {
                override fun invoke(sender: Any?, args: IgaChartToolTipUpdatingEventArgs?) {
                    if (args == null) return;
                    val data = args.currentData ?: return;
                    val value = if (member == "Label") data.itemLabel else getter.getPropertyValue(data.item);
                    val text = when (value) {
                        is Double -> NumberUtil.doubleToMinDecimalsString(value).orEmpty();
                        null -> "";
                        else -> value.toString();
                    };
                    val view = args.currentView as? TextView ?: TextView(context);
                    view.text = text;
                    args.currentView = view;
                }
            };
            val container = ChartRelativeToolTipContainer(context);
            container.addChildContent(ChartToolTipContent(adapter, context));
            model.toolTip = container;
        }
    }
    //end eventHandler
}
