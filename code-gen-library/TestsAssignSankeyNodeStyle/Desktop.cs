//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAssignSankeyNodeStyle
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningFlowStyleEventHandler
    public void TestsAssignSankeyNodeStyle(object sender, AssigningFlowStyleEventArgs args)
    {
        // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
        if (args.StartIndex == 0)
        {
            args.Fill = new SolidColorBrush(Colors.Purple);
        }
    }
    //end eventHandler
}
