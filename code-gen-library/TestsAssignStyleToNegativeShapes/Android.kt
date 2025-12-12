//begin imports
import com.infragistics.mobile.controls.IgaAssigningCategoryStyleEventArgs
import android.graphics.Color
import com.infragistics.mobile.controls.IgaSolidColorBrush
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAssignStyleToNegativeShapes {

    //begin eventHandler
    public fun testsAssignStyleToNegativeShapes(sender: Any?, args: IgaAssigningCategoryStyleEventArgs) {
        if (args.selectionHighlightingInfo != null && args.isNegativeShape) {
            args.fill = IgaSolidColorBrush(Color.BLUE)
            args.stroke = IgaSolidColorBrush(Color.BLACK)
            args.highlightingHandled = true
        }
    }
    //end eventHandler

}
