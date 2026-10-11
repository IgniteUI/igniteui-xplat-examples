//begin imports
import com.infragistics.mobile.controls.IgaAssigningFlowStyleEventArgs
import android.graphics.Color
import com.infragistics.mobile.controls.IgaSolidColorBrush
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAssignSankeyNodeStyle {
    //begin eventHandler
    public fun testsAssignSankeyNodeStyle(sender: Any?, args: IgaAssigningFlowStyleEventArgs) {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if (args.startIndex == 0) {
            args.fill = IgaSolidColorBrush(Color.parseColor("#800080"))
        }
    }
    //end eventHandler
}
