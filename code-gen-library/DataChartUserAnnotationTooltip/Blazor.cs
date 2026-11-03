//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataChartUserAnnotationTooltip
{
    //begin eventHandler
    public void DataChartUserAnnotationTooltip(IgbUserAnnotationToolTipContentUpdatingEventArgs args)
    {
        // Blazor reaches the tooltip's content through the same event, and the annotation's own text
        // is what belongs in it.
        args.Content = args.AnnotationInfo.AnnotationData;
    }
    //end eventHandler
}
