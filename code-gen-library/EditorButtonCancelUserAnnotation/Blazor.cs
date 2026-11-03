//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonCancelUserAnnotation
{
    //begin eventHandler
    public void EditorButtonCancelUserAnnotation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        UserAnnotationFlow.Cancel(CodeGenHelper.GetDescription<IgbDataChart>("content"));
    }
    //end eventHandler
}
