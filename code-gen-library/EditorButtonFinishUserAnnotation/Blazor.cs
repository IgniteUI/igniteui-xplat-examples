//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    public void EditorButtonFinishUserAnnotation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.GetDescription<IgbPropertyEditorPropertyDescription>("AnnotationLabel");
        fields.Details = CodeGenHelper.GetDescription<IgbPropertyEditorPropertyDescription>("AnnotationDetails");
        fields.MainColor = CodeGenHelper.GetDescription<IgbPropertyEditorPropertyDescription>("AnnotationMainColor");
        fields.BadgeColor = CodeGenHelper.GetDescription<IgbPropertyEditorPropertyDescription>("AnnotationBadgeColor");
        UserAnnotationFlow.Finish(CodeGenHelper.GetDescription<IgbDataChart>("content"), fields);
    }
    //end eventHandler
}
