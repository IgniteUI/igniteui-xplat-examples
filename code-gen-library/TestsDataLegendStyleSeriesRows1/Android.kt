//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesRows1 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesRows1(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        when (args.seriesTitle) {
            "One" -> {
                args.titleText = "Series1"
                args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Two" -> {
                args.titleText = "Series2"
                args.titleTextColor = IgaSolidColorBrush(Color.RED)
            }
            "Three" -> {
                args.titleText = "Series3"
                args.titleTextColor = IgaSolidColorBrush(Color.GREEN)
            }
        }
    }
    //end eventHandler

}