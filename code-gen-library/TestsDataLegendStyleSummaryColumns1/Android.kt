//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingColumnEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSummaryColumns1 {

    //begin eventHandler
    fun testsDataLegendStyleSummaryColumns1(sender: Any?, args: IgaDataLegendStylingColumnEventArgs) {
        args.valueTextColor = IgaSolidColorBrush(Color.RED)
    }
    //end eventHandler

}