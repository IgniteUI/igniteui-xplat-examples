//begin imports
using Infragistics.Controls.Charts;
using Microsoft.UI;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Media;
//end imports

public class DataChartUserAnnotationTooltip
{
    //begin eventHandler
    //WinUI: Infragistics.Controls.Charts.UserAnnotationToolTipContentUpdatingEventHandler
    // The layer hands over the tooltip's content panel each time it shows an annotation: the
    // annotation's details go in a line of text, made the first time and updated after that.
    public void DataChartUserAnnotationTooltip(object sender, UserAnnotationToolTipContentUpdatingEventArgs args)
    {
        var container = (StackPanel)args.Content;
        var tooltipText = args.AnnotationInfo.AnnotationData;
        if (container.Children.Count == 0)
        {
            var line = new TextBlock();
            line.Text = tooltipText;
            line.Foreground = new SolidColorBrush(Colors.White);
            container.Children.Add(line);
        }
        else
        {
            ((TextBlock)container.Children[0]).Text = tooltipText;
        }
    }
    //end eventHandler
}
