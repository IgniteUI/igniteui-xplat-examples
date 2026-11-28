//begin template
//begin imports
import android.graphics.Typeface
import android.util.TypedValue
import android.text.SpannableString
import android.text.Spanned
import android.text.style.ForegroundColorSpan
import android.text.style.StyleSpan
import android.widget.TextView
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import com.infragistics.mobile.controls.IgaSolidColorBrush
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventArgs
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventHandler
//end imports

public class DataChartProductionTooltipTemplate {
    //begin content
    public val DataChartProductionTooltipTemplate = object : IgaChartToolTipUpdatingEventHandler {
        override fun invoke(sender: Any?, args: IgaChartToolTipUpdatingEventArgs?) {
            val info = args ?: return
            val item = info.currentData?.item as? EnergyProductionByCountryItem ?: return
            var view = info.currentView as? TextView
            if (view == null) {
                val context = CodeGenHelper.getDescription<IgaDataChart>("content")!!.context
                view = TextView(context)
                val padding = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 5f,
                    context.resources.displayMetrics).toInt()
                view.setPadding(padding, padding, padding, padding)
                info.currentView = view
            }
            val title = "${item.Country} Production"
            val text = SpannableString(title +
                "\nCoal: ${productionValue(item.Coal)}" +
                "\nHydro: ${productionValue(item.Hydro)}" +
                "\nNuclear: ${productionValue(item.Nuclear)}" +
                "\nGas: ${productionValue(item.Gas)}" +
                "\nOil: ${productionValue(item.Oil)}")
            text.setSpan(StyleSpan(Typeface.BOLD), 0, title.length, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
            val brush = (sender as? IgaSeries)?.actualBrush as? IgaSolidColorBrush
            if (brush != null) {
                text.setSpan(ForegroundColorSpan(brush.color), 0, title.length,
                    Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
            }
            view.text = text
        }
    }
    //end content

    //begin supportingMethods
    private fun productionValue(value: Double): String =
        if (value == kotlin.math.floor(value)) value.toLong().toString() else value.toString()
    //end supportingMethods
}
//end template
