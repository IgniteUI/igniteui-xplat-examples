//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSummaryRows1 {

    //begin eventHandler
    fun testsDataLegendStyleSummaryRows1(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        args.titleText = "The Total"
        args.titleTextColor = IgaSolidColorBrush(Color.BLUE)
    }
    //end eventHandler

}