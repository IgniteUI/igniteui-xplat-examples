//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeHighVolumeDataPoints
{
    //begin eventHandler
    public void EditorChangeHighVolumeDataPoints(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartVolumeData.Count = System.Convert.ToInt32(args.NewValue);
    }
    //end eventHandler
}
