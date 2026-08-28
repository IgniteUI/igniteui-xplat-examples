//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorChangeHighFrequencyRefresh
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeHighFrequencyRefresh(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartFrequency.RefreshMilliseconds = System.Convert.ToInt32(args.NewValue);
        CategoryChartFrequency.RestartTimer();
    }
    //end eventHandler
}
