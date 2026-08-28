//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonFinishUserAnnotation
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonFinishUserAnnotation(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationLabel");
        fields.Details = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationDetails");
        fields.MainColor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationMainColor");
        fields.BadgeColor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationBadgeColor");
        UserAnnotationFlow.Finish(CodeGenHelper.GetDescription<XamDataChart>("content"), fields);
    }
    //end eventHandler
}
