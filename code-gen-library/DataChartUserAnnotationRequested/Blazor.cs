//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    public void DataChartUserAnnotationRequested(IgbUserAnnotationInformationEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationLabel");
        fields.Details = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationDetails");
        fields.MainColor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationMainColor");
        fields.BadgeColor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("AnnotationBadgeColor");
        UserAnnotationFlow.Begin(args.AnnotationInfo, fields);
    }
    //end eventHandler
}
