//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesRowsByGroup1 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesRowsByGroup1(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        when (args.groupName) {
            "Group1" -> {
                args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Group2" -> {
                args.titleTextColor = IgaSolidColorBrush(Color.RED)
            }
        }
    }
    //end eventHandler

}