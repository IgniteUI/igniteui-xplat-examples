//begin imports
import com.infragistics.mobile.controls.IgaAssigningCategoryMarkerStyleEventArgs
import android.graphics.Color
import com.infragistics.mobile.controls.IgaSolidColorBrush
//end imports

import com.infragistics.mobile.library.CodeGenHelper

public class TestsAssignStyleToSelectedMarkers {

    //begin eventHandler
    public fun testsAssignStyleToSelectedMarkers(sender: Any?, args: IgaAssigningCategoryMarkerStyleEventArgs) {
        if (args.selectionHighlightingInfo != null) {
            args.fill = IgaSolidColorBrush(Color.BLUE)
            args.stroke = IgaSolidColorBrush(Color.BLACK)
            args.highlightingHandled = true
        }
    }
    //end eventHandler

}
