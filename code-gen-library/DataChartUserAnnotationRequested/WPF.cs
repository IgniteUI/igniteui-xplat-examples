//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Inputs;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationInformationRequestedEventHandler
    // The chart asks for the annotation's label, details and colours when the reader draws one from
    // the toolbar, and draws it once the dialog answers: Done finishes the annotation with what was
    // entered, Cancel abandons it.
    public void DataChartUserAnnotationRequested(object sender, UserAnnotationInformationEventArgs args)
    {
        var chart = (XamDataChart)sender;
        var info = args.AnnotationInfo;

        var panel = new StackPanel() { Margin = new Thickness(8) };
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

        var buttons = new StackPanel()
        {
            Orientation = Orientation.Horizontal,
            HorizontalAlignment = HorizontalAlignment.Center,
            Margin = new Thickness(0, 16, 0, 0)
        };
        var doneButton = new Button() { Content = "Done", Width = 64, Margin = new Thickness(8, 0, 8, 0) };
        var cancelButton = new Button() { Content = "Cancel", Width = 64, Margin = new Thickness(8, 0, 8, 0) };
        buttons.Children.Add(doneButton);
        buttons.Children.Add(cancelButton);
        panel.Children.Add(buttons);

        var dialog = new Window()
        {
            Title = "Annotation",
            Content = panel,
            Width = 240,
            SizeToContent = SizeToContent.Height,
            ResizeMode = ResizeMode.NoResize,
            WindowStartupLocation = WindowStartupLocation.CenterOwner,
            Owner = Window.GetWindow(chart)
        };

        var finished = false;
        doneButton.Click += (s, e) =>
        {
            info.Label = labelInput.Text;
            info.AnnotationData = detailsInput.Text;
            info.BadgeColor = badgeColorEditor.Value;
            info.MainColor = mainColorEditor.Value;
            chart.FinishAnnotationFlow(info);
            finished = true;
            dialog.Close();
        };
        cancelButton.Click += (s, e) => dialog.Close();
        // Closing the dialog any other way abandons the annotation, as Cancel does.
        dialog.Closed += (s, e) =>
        {
            if (!finished && info.AnnotationId != null)
            {
                chart.CancelAnnotationFlow(info.AnnotationId);
            }
        };

        dialog.Show();
    }
    //end eventHandler
}
