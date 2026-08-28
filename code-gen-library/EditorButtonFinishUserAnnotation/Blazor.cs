//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    public void EditorButtonFinishUserAnnotation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        UserAnnotationFlow.Finish();
    }
    //end eventHandler
}
