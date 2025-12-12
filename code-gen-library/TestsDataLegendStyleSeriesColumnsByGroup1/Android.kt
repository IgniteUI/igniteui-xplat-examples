//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingColumnEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesColumnsByGroup1 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesColumnsByGroup1(sender: Any?, args: IgaDataLegendStylingColumnEventArgs) {
        when (args.groupName) {
            "Group1" -> {
                args.labelText = "Value"
                args.labelTextColor = IgaSolidColorBrush(Color.BLUE)
                args.valueTextColor = IgaSolidColorBrush(Color.BLUE)
            }
            "Group2" -> {
                args.labelText = "Value"
                args.labelTextColor = IgaSolidColorBrush(Color.RED)
                args.valueTextColor = IgaSolidColorBrush(Color.RED)
            }
        }
    }
    //end eventHandler

}