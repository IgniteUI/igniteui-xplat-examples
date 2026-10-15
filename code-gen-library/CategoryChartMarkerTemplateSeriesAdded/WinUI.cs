//begin imports
using Infragistics.Controls.Charts;
//end imports

public class CategoryChartMarkerTemplateSeriesAdded
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler
    public void CategoryChartMarkerTemplateSeriesAdded(object sender, ChartSeriesEventArgs args)
    {
        // Nothing to hand the series yet on WinUI.
        //
        // WPF looks a keyed DataTemplate up from the chart and hangs it on each series the category
        // chart makes. WinUI draws its markers immediate mode, so there is no template to hang: a
        // custom marker here is going to be a render callback or path data in the SVG sense, not a
        // XAML template, and MarkerTemplate is typed for the portable shape rather than the XAML one
        // to leave room for it.
        //
        // The handler stays wired so the sample keeps the same shape it has everywhere else, and
        // does nothing until there is something for it to do.
    }
    //end eventHandler
}
