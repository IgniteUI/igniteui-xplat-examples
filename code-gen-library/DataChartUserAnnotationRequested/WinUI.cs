//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Inputs;
using Microsoft.UI;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Media;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    //WinUI: Infragistics.Controls.Charts.UserAnnotationInformationRequestedEventHandler
    // The chart asks for the annotation's label, details and colours when the reader draws one from
    // the toolbar, and draws it once the dialog answers: Done finishes the annotation with what was
    // entered, and Cancel, or dismissing the dialog, abandons it.
    public async void DataChartUserAnnotationRequested(object sender, UserAnnotationInformationEventArgs args)
    {
        var chart = (XamDataChart)sender;
        var info = args.AnnotationInfo;

        var panel = new StackPanel() { Spacing = 4 };
        panel.Children.Add(new TextBlock() { Text = "Label:" });
        var labelInput = new TextBox() { Text = "Enter Label" };
        panel.Children.Add(labelInput);
        panel.Children.Add(new TextBlock() { Text = "Details:" });
        var detailsInput = new TextBox()
        {
            Text = "Enter Details",
            AcceptsReturn = true,
            TextWrapping = TextWrapping.Wrap,
            Height = 64
        };
        panel.Children.Add(detailsInput);
        panel.Children.Add(new TextBlock() { Text = "Badge Color:" });
        var badgeColorEditor = new XamColorEditor() { Value = new SolidColorBrush(Colors.Black) };
        panel.Children.Add(badgeColorEditor);
        panel.Children.Add(new TextBlock() { Text = "Main Color:" });
        var mainColorEditor = new XamColorEditor() { Value = new SolidColorBrush(Colors.Black) };
        panel.Children.Add(mainColorEditor);

        var dialog = new ContentDialog()
        {
            Title = "Annotation",
            Content = panel,
            PrimaryButtonText = "Done",
            CloseButtonText = "Cancel",
            DefaultButton = ContentDialogButton.Primary,
            XamlRoot = chart.XamlRoot
        };

        var result = await dialog.ShowAsync();
        if (result == ContentDialogResult.Primary)
        {
            info.Label = labelInput.Text;
            info.AnnotationData = detailsInput.Text;
            info.BadgeColor = badgeColorEditor.Value;
            info.MainColor = mainColorEditor.Value;
            chart.FinishAnnotationFlow(info);
        }
        else if (info.AnnotationId != null)
        {
            chart.CancelAnnotationFlow(info.AnnotationId);
        }
    }
    //end eventHandler
}
