//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAccessibilityNodeOverrideDescription
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AccessibilityNodeCreatingEventHandler
    public void TestsAccessibilityNodeOverrideDescription(object sender, AccessibilityNodeCreatingEventArgs args)
    {
        if (args.Node != null && args.Node.Role == AccessibilityRole.Item)
        {
            args.Node.Description = "custom override";
        }
    }
    //end eventHandler
}
