//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    public void EditorButtonFinishUserAnnotation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationLabel");
        fields.Details = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationDetails");
        fields.MainColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationMainColor");
        fields.BadgeColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationBadgeColor");
        UserAnnotationFlow.Finish(CodeGenHelper.GetDescription<IgbDataChart>("content"), fields);
    }
    //end eventHandler
}
