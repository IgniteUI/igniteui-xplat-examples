//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Inputs;
using Infragistics.Core.Graphics;
//end imports

public class DataChartUserAnnotationRequested
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.UserAnnotationInformationRequestedEventHandler
    // The chart asks for the annotation's label, details and colours when the reader draws one from
    // the toolbar, and draws it once the dialog answers: Done finishes the annotation with what was
    // entered, and Cancel, or closing the dialog, abandons it.
    public void DataChartUserAnnotationRequested(object sender, UserAnnotationInformationEventArgs args)
    {
        var chart = (XamDataChart)sender;
        var info = args.AnnotationInfo;

        var dialog = new Gtk.Dialog();
        dialog.Title = "Annotation";
        dialog.TransientFor = chart.Toplevel as Gtk.Window;
        dialog.DestroyWithParent = true;
        dialog.SetDefaultSize(240, -1);

        var content = dialog.ContentArea;
        content.Spacing = 4;
        content.Margin = 8;

        content.PackStart(new Gtk.Label("Label:") { Xalign = 0 }, false, false, 0);
        var labelInput = new Gtk.Entry() { Text = "Enter Label" };
        content.PackStart(labelInput, false, false, 0);

        content.PackStart(new Gtk.Label("Details:") { Xalign = 0 }, false, false, 0);
        var detailsInput = new Gtk.TextView() { WrapMode = Gtk.WrapMode.WordChar };
        detailsInput.Buffer.Text = "Enter Details";
        detailsInput.SetSizeRequest(-1, 64);
        content.PackStart(detailsInput, false, false, 0);

        content.PackStart(new Gtk.Label("Badge Color:") { Xalign = 0 }, false, false, 0);
        var badgeColorEditor = new XamColorEditor() { Value = new SolidColorBrush(Colors.Black) };
        badgeColorEditor.SetSizeRequest(-1, 32);
        content.PackStart(badgeColorEditor, false, false, 0);

        content.PackStart(new Gtk.Label("Main Color:") { Xalign = 0 }, false, false, 0);
        var mainColorEditor = new XamColorEditor() { Value = new SolidColorBrush(Colors.Black) };
        mainColorEditor.SetSizeRequest(-1, 32);
        content.PackStart(mainColorEditor, false, false, 0);

        dialog.AddButton("Done", Gtk.ResponseType.Ok);
        dialog.AddButton("Cancel", Gtk.ResponseType.Cancel);

        dialog.Response += (s, e) =>
        {
            if (e.ResponseId == Gtk.ResponseType.Ok)
            {
                info.Label = labelInput.Text;
                info.AnnotationData = detailsInput.Buffer.Text;
                info.BadgeColor = badgeColorEditor.Value;
                info.MainColor = mainColorEditor.Value;
                chart.FinishAnnotationFlow(info);
            }
            else if (info.AnnotationId != null)
            {
                chart.CancelAnnotationFlow(info.AnnotationId);
            }
            dialog.Destroy();
        };

        dialog.ShowAll();
    }
    //end eventHandler
}
