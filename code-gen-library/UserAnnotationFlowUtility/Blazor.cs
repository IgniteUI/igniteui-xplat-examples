//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin supportingTypes
// The annotation the reader is part-way through drawing. The chart hands it over when it wants the
// label and colours filled in, and will not draw it until one of the two buttons answers -- so the
// pending annotation has to outlive the request, and all three handlers have to be looking at the
// same one.
public static class UserAnnotationFlow
{
    private static UserAnnotationInformation pending;

    private static XamDataChart Chart()
    {
        return CodeGenHelper.GetDescription<XamDataChart>("content");
    }

    private static PropertyEditorPropertyDescription Field(string name)
    {
        return CodeGenHelper.GetDescription<PropertyEditorPropertyDescription>(name);
    }

    // Seeds the fields with whatever the annotation already carries, so an edit starts from what is
    // there rather than from the placeholder text.
    public static void Begin(UserAnnotationInformation info)
    {
        pending = info;
        Field("AnnotationLabel").PrimitiveValue = info.Label == null ? "" : info.Label;
        Field("AnnotationDetails").PrimitiveValue = info.AnnotationData == null ? "" : info.AnnotationData;
        Field("AnnotationMainColor").PrimitiveValue = info.MainColor == null ? "black" : info.MainColor;
        Field("AnnotationBadgeColor").PrimitiveValue = info.BadgeColor == null ? "black" : info.BadgeColor;
    }

    public static void Finish()
    {
        if (pending == null)
        {
            return;
        }
        pending.Label = System.Convert.ToString(Field("AnnotationLabel").PrimitiveValue);
        pending.AnnotationData = System.Convert.ToString(Field("AnnotationDetails").PrimitiveValue);
        pending.MainColor = System.Convert.ToString(Field("AnnotationMainColor").PrimitiveValue);
        pending.BadgeColor = System.Convert.ToString(Field("AnnotationBadgeColor").PrimitiveValue);
        Chart().FinishAnnotationFlow(pending);
        pending = null;
    }

    public static void Cancel()
    {
        if (pending != null && pending.AnnotationId != null)
        {
            Chart().CancelAnnotationFlow(pending.AnnotationId);
        }
        pending = null;
    }
}
//end supportingTypes
