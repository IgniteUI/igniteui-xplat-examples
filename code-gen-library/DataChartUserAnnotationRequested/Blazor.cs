//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    public void DataChartUserAnnotationRequested(IgbUserAnnotationInformationEventArgs args)
    {
        UserAnnotationFlow.Begin(args.AnnotationInfo);
    }
    //end eventHandler
}
