//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesRows2 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesRows2(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        when (args.seriesTitle) {
            "Financial1" -> {
                args.titleText = "F1"
                args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Financial2" -> {
                args.titleText = "F2"
                args.titleTextColor = IgaSolidColorBrush(Color.rgb(255, 165, 0)) // Orange
            }
        }
    }
    //end eventHandler

}