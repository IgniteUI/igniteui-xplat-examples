//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleHeaderRed {

    //begin eventHandler
    fun testsDataLegendStyleHeaderRed(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        args.titleTextColor = IgaSolidColorBrush(Color.RED)
    }
    //end eventHandler

}