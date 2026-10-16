//begin imports
import com.infragistics.mobile.controls.IgaAccessibilityNodeCreatingEventArgs;
import com.infragistics.mobile.controls.IgaAccessibilityRole;
//end imports

public class TestsAccessibilityNodeCancelAuto {
    //begin eventHandler
    public fun testsAccessibilityNodeCancelAuto(sender: Any?, args: IgaAccessibilityNodeCreatingEventArgs) {
        var node = args.node;
        if (node != null && node.role == IgaAccessibilityRole.ITEM) {
            node.descriptionText = "";
            args.cancelAuto = true;
        }
    }
    //end eventHandler
}
