//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAccessibilityNodeAddAction
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AccessibilityNodeCreatingEventHandler
    public void TestsAccessibilityNodeAddAction(object sender, AccessibilityNodeCreatingEventArgs args)
    {
        if (args.Node != null && args.Node.Role == AccessibilityRole.Item)
        {
            if (args.Node.Actions == null)
            {
                args.Node.Actions = new AccessibilityActionCollection();
            }
            args.Node.Actions.Add(new AccessibilityAction() { Name = "Activate" });
        }
    }
    //end eventHandler
}
