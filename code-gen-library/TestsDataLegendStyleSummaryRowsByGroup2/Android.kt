//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSummaryRowsByGroup2 {

    //begin eventHandler
    fun testsDataLegendStyleSummaryRowsByGroup2(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        when (args.groupName) {
            "Group1" -> {
                args.titleText = "Summary"
                args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Group2" -> {
                args.titleText = "Summary"
                args.titleTextColor = IgaSolidColorBrush(Color.RED)
            }
        }
    }
    //end eventHandler

}