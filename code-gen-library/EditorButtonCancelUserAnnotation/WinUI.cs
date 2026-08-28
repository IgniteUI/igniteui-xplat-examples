//begin imports
using Infragistics.Controls.Layouts;
//end imports

public class EditorButtonCancelUserAnnotation
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonCancelUserAnnotation(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        UserAnnotationFlow.Cancel();
    }
    //end eventHandler
}
