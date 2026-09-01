//begin imports
using Infragistics.Controls.Charts;
using Microsoft.UI.Xaml;
//end imports

public class CategoryChartMarkerTemplateSeriesAdded
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    public void CategoryChartMarkerTemplateSeriesAdded(object sender, ChartSeriesEventArgs args)
    {
        // A category chart makes a series per column it is given, so there is no series in the
        // definition to hang a marker template on. The chart says when it has made one, and this is
        // where each gets the template -- taken from the resources the template item was written into,
        // since a keyed DataTemplate is what it is on this platform.
        var series = args.Series as MarkerSeries;
        if (series != null)
        {
            series.MarkerTemplate = (DataTemplate)this.Resources["CategoryChartValueMarkerTemplate"];
        }
    }
    //end eventHandler
}
