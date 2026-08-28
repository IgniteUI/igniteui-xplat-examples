//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    public void DataChartUserAnnotationRequested(IgbUserAnnotationInformationEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("AnnotationLabel");
        fields.Details = CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("AnnotationDetails");
        fields.MainColor = CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("AnnotationMainColor");
        fields.BadgeColor = CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>("AnnotationBadgeColor");
        UserAnnotationFlow.Begin(args.AnnotationInfo, fields);
    }
    //end eventHandler
}
