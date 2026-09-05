//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorChangeHighFrequencyPoints
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeHighFrequencyPoints(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        CategoryChartFrequency.Points = System.Convert.ToInt32(args.NewValue);
    }
    //end eventHandler
}
