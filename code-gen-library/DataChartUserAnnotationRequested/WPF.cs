//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationInformationRequestedEventHandler
    public void DataChartUserAnnotationRequested(object sender, UserAnnotationInformationEventArgs args)
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
