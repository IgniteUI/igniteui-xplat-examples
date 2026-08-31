//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    public void EditorButtonFinishUserAnnotation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("AnnotationLabel");
        fields.Details = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("AnnotationDetails");
        fields.MainColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("AnnotationMainColor");
        fields.BadgeColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("AnnotationBadgeColor");
        UserAnnotationFlow.Finish(CodeGenHelper.GetDescription<IgbDataChart>("content"), fields);
    }
    //end eventHandler
}
