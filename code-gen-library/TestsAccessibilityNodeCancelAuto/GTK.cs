//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAccessibilityNodeCancelAuto
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AccessibilityNodeCreatingEventHandler
    public void TestsAccessibilityNodeCancelAuto(object sender, AccessibilityNodeCreatingEventArgs args)
    {
        if (args.Node != null && args.Node.Role == AccessibilityRole.Item)
        {
            args.Node.Description = "";
            args.CancelAuto = true;
        }
    }
    //end eventHandler
}
