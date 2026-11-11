//begin imports
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using Infragistics.Core.Graphics;
//end imports

//begin supportingTypes
// The annotation the reader is part-way through drawing. The chart hands it over when it wants the
// label and colours filled in, and will not draw it until one of the two buttons answers -- so the
// pending annotation has to outlive the request, and all three handlers have to be looking at the
// same one.
//
// The chart and the four fields are handed in rather than looked up here. Asking for a description
// expands, where the sample is generated, to the field the component was assigned to -- which only
// means anything inside the component's own instance, so the entry points do the asking.
public class UserAnnotationFlowFields
{
    public PropertyEditorPropertyDescription Label { get; set; }
    public PropertyEditorPropertyDescription Details { get; set; }
    public PropertyEditorPropertyDescription MainColor { get; set; }
    public PropertyEditorPropertyDescription BadgeColor { get; set; }
}

public static class UserAnnotationFlow
{
    private static UserAnnotationInformation pending;

    // Seeds the fields with whatever the annotation already carries, so an edit starts from what is
    // there rather than from the placeholder text.
    public static void Begin(UserAnnotationInformation info, UserAnnotationFlowFields fields)
    {
        pending = info;
        fields.Label.PrimitiveValue = info.Label == null ? "" : info.Label;
        fields.Details.PrimitiveValue = info.AnnotationData == null ? "" : info.AnnotationData;
        fields.MainColor.PrimitiveValue = info.MainColor == null ? "black" : info.MainColor;
        fields.BadgeColor.PrimitiveValue = info.BadgeColor == null ? "black" : info.BadgeColor;
    }

    public static void Finish(XamDataChart chart, UserAnnotationFlowFields fields)
    {
        if (pending == null)
        {
            return;
        }
        pending.Label = System.Convert.ToString(fields.Label.PrimitiveValue);
        pending.AnnotationData = System.Convert.ToString(fields.Details.PrimitiveValue);
        pending.MainColor = ToBrush(fields.MainColor.PrimitiveValue);
        pending.BadgeColor = ToBrush(fields.BadgeColor.PrimitiveValue);
        chart.FinishAnnotationFlow(pending);
        pending = null;
    }

    /// <summary>The colour the editor holds as text, as the brush an annotation is drawn with.</summary>
    private static Brush ToBrush(object value)
    {
        var text = System.Convert.ToString(value);
        if (string.IsNullOrEmpty(text))
        {
            return null;
        }
        // The editor's value is a CSS colour, which GDK parses as the XAML converters do, the same
        // parse ColorEditorToggleSeriesBrush makes.
        var rgba = new Gdk.RGBA();
        if (!rgba.Parse(text))
        {
            return null;
        }
        return new SolidColorBrush(Color.FromArgb(
            (byte)System.Math.Round(rgba.Alpha * 255),
            (byte)System.Math.Round(rgba.Red * 255),
            (byte)System.Math.Round(rgba.Green * 255),
            (byte)System.Math.Round(rgba.Blue * 255)));
    }

    public static void Cancel(XamDataChart chart)
    {
        if (pending != null && pending.AnnotationId != null)
        {
            chart.CancelAnnotationFlow(pending.AnnotationId);
        }
        pending = null;
    }
}
//end supportingTypes
