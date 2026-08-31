//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorChangeHighVolumeDataPoints
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeHighVolumeDataPoints(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartVolumeData.Count = System.Convert.ToInt32(args.NewValue);
    }
    //end eventHandler
}
