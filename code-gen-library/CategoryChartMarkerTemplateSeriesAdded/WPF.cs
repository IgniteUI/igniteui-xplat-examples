//begin imports
using Infragistics.Controls.Charts;
using System.Windows;
//end imports

public class CategoryChartMarkerTemplateSeriesAdded
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    public void CategoryChartMarkerTemplateSeriesAdded(object sender, ChartSeriesEventArgs args)
    {
        // A category chart makes a series per column it is given, so there is no series in the
        // definition to hang a marker template on. The chart says when it has made one, and this is
        // where each gets the template. It is a keyed DataTemplate on this platform, so it is looked
        // up from the chart, which finds it wherever it was written -- rather than from the handler,
        // which is not part of the tree and has no resources of its own.
        var series = args.Series as MarkerSeries;
        var chart = sender as FrameworkElement;
        if (series != null && chart != null)
        {
            series.MarkerTemplate = (DataTemplate)chart.FindResource("CategoryChartValueMarkerTemplate");
        }
    }
    //end eventHandler
}
