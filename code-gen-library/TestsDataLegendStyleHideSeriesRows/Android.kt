//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingRowEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleHideSeriesRows {

    //begin eventHandler
    fun testsDataLegendStyleHideSeriesRows(sender: Any?, args: IgaDataLegendStylingRowEventArgs) {
        
         args.isRowVisible = false;
        
    }
    //end eventHandler

}