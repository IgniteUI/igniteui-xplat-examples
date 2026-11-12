//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DataChartUserAnnotationTooltip
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationToolTipContentUpdatingEventHandler
    // The layer hands over the tooltip's content box each time it shows an annotation: the
    // annotation's details go in a line of text, made the first time and updated after that.
    public void DataChartUserAnnotationTooltip(object sender, UserAnnotationToolTipContentUpdatingEventArgs args)
    {
        var container = (Gtk.Box)args.Content;
        var tooltipText = args.AnnotationInfo.AnnotationData;
        if (container.Children.Length == 0)
        {
            var line = new Gtk.Label(tooltipText);
            line.Xalign = 0;
            line.OverrideColor(Gtk.StateFlags.Normal, new Gdk.RGBA() { Red = 1, Green = 1, Blue = 1, Alpha = 1 });
            container.PackStart(line, false, false, 0);
            line.Show();
        }
        else
        {
            ((Gtk.Label)container.Children[0]).Text = tooltipText;
        }
    }
    //end eventHandler
}
