//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAssignStyleToNegativeShapes
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningCategoryStyleEventHandler
    public void TestsAssignStyleToNegativeShapes(object sender, AssigningCategoryStyleEventArgs args)
    {
		if (args.SelectionHighlightingInfo != null && args.IsNegativeShape){
			args.Fill  = new SolidColorBrush(Colors.Blue);
			args.Stroke = new SolidColorBrush(Colors.Black);
			 args.HighlightingHandled = true;
		}
    }
    //end eventHandler
}