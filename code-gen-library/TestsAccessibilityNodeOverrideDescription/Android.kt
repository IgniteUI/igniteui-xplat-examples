//begin imports
import com.infragistics.mobile.controls.IgaAccessibilityNodeCreatingEventArgs;
import com.infragistics.mobile.controls.IgaAccessibilityRole;
//end imports

public class TestsAccessibilityNodeOverrideDescription {
    //begin eventHandler
    public fun testsAccessibilityNodeOverrideDescription(sender: Any?, args: IgaAccessibilityNodeCreatingEventArgs) {
        var node = args.node;
        if (node != null && node.role == IgaAccessibilityRole.ITEM) {
            node.description = "custom override";
        }
    }
    //end eventHandler
}
