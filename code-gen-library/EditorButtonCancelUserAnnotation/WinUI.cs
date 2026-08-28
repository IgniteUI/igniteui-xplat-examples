//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonCancelUserAnnotation
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonCancelUserAnnotation(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        UserAnnotationFlow.Cancel(CodeGenHelper.GetDescription<XamDataChart>("content"));
    }
    //end eventHandler
}
