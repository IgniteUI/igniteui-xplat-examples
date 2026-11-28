//begin template
//begin imports
import android.graphics.Typeface
import android.util.TypedValue
import android.text.SpannableString
import android.text.Spanned
import android.text.style.StyleSpan
import android.widget.TextView
import com.infragistics.mobile.controls.IgaCategoryChart
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventArgs
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventHandler
//end imports

public class CategoryChartTooltipTemplate {
    //begin content
    public val CategoryChartTooltipTemplate = object : IgaChartToolTipUpdatingEventHandler {
        override fun invoke(sender: Any?, args: IgaChartToolTipUpdatingEventArgs?) {
            val info = args ?: return
            val item = info.currentData?.item as? MovieFranchiseRevenueItem ?: return
            var view = info.currentView as? TextView
            if (view == null) {
                val context = CodeGenHelper.getDescription<IgaCategoryChart>("content")!!.context
                view = TextView(context)
                val padding = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 5f,
                    context.resources.displayMetrics).toInt()
                view.setPadding(padding, padding, padding, padding)
                info.currentView = view
            }
            val title = "Franchise: ${item.franchise}"
            val text = SpannableString("$title\nRevenue of All Movies: ${item.totalRevenue}" +
                "\nHighest Grossing Movie: \$${item.highestGrossing}")
            text.setSpan(StyleSpan(Typeface.BOLD), 0, title.length, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
            view.text = text
        }
    }
    //end content
}
//end template
