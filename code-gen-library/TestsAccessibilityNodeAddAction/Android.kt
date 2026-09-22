//begin imports
import com.infragistics.mobile.controls.IgaAccessibilityNodeCreatingEventArgs;
import com.infragistics.mobile.controls.IgaAccessibilityAction;
import com.infragistics.mobile.controls.IgaAccessibilityActionCollection;
import com.infragistics.mobile.controls.IgaAccessibilityRole;
//end imports

public class TestsAccessibilityNodeAddAction {
    //begin eventHandler
    public fun testsAccessibilityNodeAddAction(sender: Any?, args: IgaAccessibilityNodeCreatingEventArgs) {
        var node = args.node;
        if (node != null && node.role == IgaAccessibilityRole.ITEM) {
            // Assign the collection first, then add to it through the property.
            // The wrapper's getter lazily builds a collection that reads from the
            // implementation but carries no sync target, so items added through it
            // never reach the implementation; only the setter wires that
            // write-through. It also means the null check the other platforms make
            // would never fire here -- this getter does not return null.
            node.actions = IgaAccessibilityActionCollection();
            var action = IgaAccessibilityAction();
            action.name = "Activate";
            node.actions!!.add(action);
        }
    }
    //end eventHandler
}
