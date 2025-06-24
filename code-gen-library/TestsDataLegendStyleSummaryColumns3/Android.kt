//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingColumnEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSummaryColumns3 {

    //begin eventHandler
    fun testsDataLegendStyleSummaryColumns3(sender: Any?, args: IgaDataLegendStylingColumnEventArgs) {
        when (args.valueMemberPath) {
            "Open", "[Open]" -> {
                args.valueTextColor = IgaSolidColorBrush(Color.GREEN)
            }
            "High", "[High]" -> {
                args.valueTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Low", "[Low]" -> {
                args.valueTextColor = IgaSolidColorBrush(Color.rgb(255, 165, 0)) // Orange
            }
            "Close", "[Close]" -> {
                args.valueTextColor = IgaSolidColorBrush(Color.RED)
            }
        }
    }
    //end eventHandler

}