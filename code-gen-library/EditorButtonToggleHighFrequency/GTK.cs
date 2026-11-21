//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorButtonToggleHighFrequency
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonToggleHighFrequency(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CategoryChartFrequency.Toggle();
    }
    //end eventHandler
}
