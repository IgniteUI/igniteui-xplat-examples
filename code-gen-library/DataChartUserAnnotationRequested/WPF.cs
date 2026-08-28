//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationInformationEventHandler
    public void DataChartUserAnnotationRequested(object sender, UserAnnotationInformationEventArgs args)
    {
        UserAnnotationFlow.Begin(args.AnnotationInfo);
    }
    //end eventHandler
}
