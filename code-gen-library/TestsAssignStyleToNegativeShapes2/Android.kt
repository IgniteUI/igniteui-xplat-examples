//begin imports
import com.infragistics.mobile.controls.IgaAssigningCategoryStyleEventArgs
import android.graphics.Color
import com.infragistics.mobile.controls.IgaSolidColorBrush
//end imports

import com.infragistics.mobile.library.CodeGenHelper

public class TestsAssignStyleToNegativeShapes2 {

    //begin eventHandler
    public fun testsAssignStyleToNegativeShapes2(sender: Any?, args: IgaAssigningCategoryStyleEventArgs) {
        if (args.selectionHighlightingInfo != null && args.isNegativeShape) {
            args.fill = IgaSolidColorBrush(Color.BLUE)
            args.stroke = IgaSolidColorBrush(Color.BLACK)
            args.strokeThickness = 2.0;
            args.highlightingHandled = true
        }
    }
    //end eventHandler

}
