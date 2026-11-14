//begin imports
using Infragistics.Controls.Charts;
using System.Windows.Controls;
using System.Windows.Media;
//end imports

public class DataChartUserAnnotationTooltip
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationToolTipContentUpdatingEventHandler
    // The layer hands over the tooltip's content control each time it shows an annotation: the
    // annotation's details go in a line of text, made the first time and updated after that.
    public void DataChartUserAnnotationTooltip(object sender, UserAnnotationToolTipContentUpdatingEventArgs args)
    {
        var container = (ContentControl)args.Content;
        var tooltipText = args.AnnotationInfo.AnnotationData;
        var line = container.Content as TextBlock;
        if (line == null)
        {
            line = new TextBlock();
            line.Foreground = new SolidColorBrush(Colors.White);
            container.Content = line;
        }
        line.Text = tooltipText;
    }
    //end eventHandler
}
