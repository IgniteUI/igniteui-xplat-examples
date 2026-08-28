//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeHighFrequencyRefresh
{
    //begin eventHandler
    public void EditorChangeHighFrequencyRefresh(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartFrequency.RefreshMilliseconds = System.Convert.ToInt32(args.NewValue);
        CategoryChartFrequency.RestartTimer();
    }
    //end eventHandler
}
