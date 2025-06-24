//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSummaryRows3 {

    //begin eventHandler
    fun testsDataLegendStyleSummaryRows3(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        args.titleText = "TOTAL"
        args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
    }
    //end eventHandler

}