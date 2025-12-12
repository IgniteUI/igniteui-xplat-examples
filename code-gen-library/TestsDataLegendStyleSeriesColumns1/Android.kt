//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingColumnEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesColumns1 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesColumns1(sender: Any?, args: IgaDataLegendStylingColumnEventArgs) {
        when (args.seriesTitle) {
            "One" -> {
                args.labelText = "Value"
                args.labelTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                args.valueText = "+25.000"
                args.valueTextColor = IgaSolidColorBrush(Color.RED)
            }
            "Two" -> {
                args.labelText = "Value"
                args.labelTextColor = IgaSolidColorBrush(Color.BLUE)
                args.valueText = "+10.000"
                args.valueTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
            }
            "Three" -> {
                args.labelText = "Value"
                args.labelTextColor = IgaSolidColorBrush(Color.RED)
                args.valueText = "+20.000"
                args.valueTextColor = IgaSolidColorBrush(Color.BLUE)
            }
        }
    }
    //end eventHandler

}