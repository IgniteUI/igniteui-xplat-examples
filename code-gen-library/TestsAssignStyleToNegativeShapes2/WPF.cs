//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAssignStyleToNegativeShapes2
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningCategoryStyleEventHandler
    public void TestsAssignStyleToNegativeShapes2(object sender, AssigningCategoryStyleEventArgs args)
    {
		if (args.SelectionHighlightingInfo != null && args.IsNegativeShape){
			args.Fill  = new SolidColorBrush(Colors.Blue);
			args.Stroke = new SolidColorBrush(Colors.Black);
			args.StrokeThickness = 2;
			 args.HighlightingHandled = true;
		}
    }
    //end eventHandler
}