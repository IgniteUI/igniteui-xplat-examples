//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAssignStyleToSelectedMarkers
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningCategoryMarkerStyleEventHandler
    public void TestsAssignStyleToSelectedMarkers(object sender, AssigningCategoryMarkerStyleEventArgs args)
    {
		
            if (args.SelectionHighlightingInfo != null)
            {
                args.Fill = new SolidColorBrush(Colors.Blue);
                args.Stroke = new SolidColorBrush(Colors.Black);
                args.HighlightingHandled = true;
            }
    }
    //end eventHandler
}