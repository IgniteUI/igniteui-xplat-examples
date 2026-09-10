//begin imports
using Infragistics.Controls.Charts;
using System.Windows.Controls;
using System.Windows.Media;
//end imports

public class DataChartUserAnnotationTooltip
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationToolTipContentUpdatingEventHandler
    public void DataChartUserAnnotationTooltip(object sender, UserAnnotationToolTipContentUpdatingEventArgs args)
    {
        // The layer hands over the tooltip's own content control, so the text replaces whatever it
        // is presenting rather than being appended to it.
        var container = args.Content as ContentControl;
        if (container == null)
        {
            return;
        }
        var line = new TextBlock();
        line.Text = args.AnnotationInfo.AnnotationData;
        line.Foreground = new SolidColorBrush(Colors.White);
        container.Content = line;
    }
    //end eventHandler
}
