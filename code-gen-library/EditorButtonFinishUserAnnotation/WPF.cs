//begin imports
using Infragistics.Controls.Layouts;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonFinishUserAnnotation(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        UserAnnotationFlow.Finish();
    }
    //end eventHandler
}
