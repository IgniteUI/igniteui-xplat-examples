//begin imports
using Infragistics.Controls.Charts;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Media;
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
            series.MarkerTemplate = (DataTemplate)FindResource(chart, "CategoryChartValueMarkerTemplate");
        }
    }

    /// <summary>
    /// The keyed resource an element can see, which is what WPF's FindResource returns.
    ///
    /// WinUI has no FindResource: Resources is the one dictionary an element holds, not the chain a
    /// StaticResource is resolved against. The sample writes the template into the Resources of the
    /// control the chart sits in, so the same walk is done here -- out through the parents, then the
    /// application, the two places WPF would have looked.
    /// </summary>
    private object FindResource(FrameworkElement element, string key)
    {
        object found;
        while (element != null)
        {
            if (element.Resources != null && element.Resources.TryGetValue(key, out found))
            {
                return found;
            }
            element = VisualTreeHelper.GetParent(element) as FrameworkElement;
        }
        var app = Application.Current;
        if (app != null && app.Resources != null && app.Resources.TryGetValue(key, out found))
        {
            return found;
        }
        return null;
    }
    //end eventHandler
}
