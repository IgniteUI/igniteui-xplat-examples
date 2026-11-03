//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeHighFrequencyPoints
{
    //begin eventHandler
    public void EditorChangeHighFrequencyPoints(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartFrequency.Points = System.Convert.ToInt32(args.NewValue);
    }
    //end eventHandler
}
