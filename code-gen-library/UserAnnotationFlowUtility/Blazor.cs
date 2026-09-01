//begin imports
using IgniteUI.Blazor.Controls;
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
    public IgbPropertyEditorPropertyDescription Label { get; set; }
    public IgbPropertyEditorPropertyDescription Details { get; set; }
    public IgbPropertyEditorPropertyDescription MainColor { get; set; }
    public IgbPropertyEditorPropertyDescription BadgeColor { get; set; }
}

public static class UserAnnotationFlow
{
    private static IgbUserAnnotationInformation pending;

    // Seeds the fields with whatever the annotation already carries, so an edit starts from what is
    // there rather than from the placeholder text.
    public static void Begin(IgbUserAnnotationInformation info, UserAnnotationFlowFields fields)
    {
        pending = info;
        fields.Label.PrimitiveValue = info.Label == null ? "" : info.Label;
        fields.Details.PrimitiveValue = info.AnnotationData == null ? "" : info.AnnotationData;
        fields.MainColor.PrimitiveValue = info.MainColor == null ? "black" : info.MainColor;
        fields.BadgeColor.PrimitiveValue = info.BadgeColor == null ? "black" : info.BadgeColor;
    }

    public static void Finish(IgbDataChart chart, UserAnnotationFlowFields fields)
    {
        if (pending == null)
        {
            return;
        }
        pending.Label = System.Convert.ToString(fields.Label.PrimitiveValue);
        pending.AnnotationData = System.Convert.ToString(fields.Details.PrimitiveValue);
        pending.MainColor = System.Convert.ToString(fields.MainColor.PrimitiveValue);
        pending.BadgeColor = System.Convert.ToString(fields.BadgeColor.PrimitiveValue);
        chart.FinishAnnotationFlow(pending);
        pending = null;
    }

    public static void Cancel(IgbDataChart chart)
    {
        if (pending != null && pending.AnnotationId != null)
        {
            chart.CancelAnnotationFlow(pending.AnnotationId);
        }
        pending = null;
    }
}
//end supportingTypes
