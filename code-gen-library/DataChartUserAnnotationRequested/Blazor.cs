//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    public void DataChartUserAnnotationRequested(IgbUserAnnotationInformationEventArgs args)
    {
        var fields = new UserAnnotationFlowFields();
        fields.Label = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationLabel");
        fields.Details = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationDetails");
        fields.MainColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationMainColor");
        fields.BadgeColor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("annotationBadgeColor");
        UserAnnotationFlow.Begin(args.AnnotationInfo, fields);
    }
    //end eventHandler
}
