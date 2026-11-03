//begin imports
import { IgcDataChartComponent, IgcUserAnnotationInformation } from 'igniteui-webcomponents-charts';
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
export class UserAnnotationFlowFields {
    public label: any;
    public details: any;
    public mainColor: any;
    public badgeColor: any;
}

export class UserAnnotationFlow {

    private static pending: IgcUserAnnotationInformation | null = null;

    // Seeds the fields with whatever the annotation already carries, so an edit starts from what is
    // there rather than from the placeholder text.
    public static begin(info: IgcUserAnnotationInformation, fields: UserAnnotationFlowFields): void {
        UserAnnotationFlow.pending = info;
        fields.label.primitiveValue = info.label == null ? "" : info.label;
        fields.details.primitiveValue = info.annotationData == null ? "" : info.annotationData;
        fields.mainColor.primitiveValue = info.mainColor == null ? "black" : info.mainColor;
        fields.badgeColor.primitiveValue = info.badgeColor == null ? "black" : info.badgeColor;
    }

    public static finish(chart: IgcDataChartComponent, fields: UserAnnotationFlowFields): void {
        var info = UserAnnotationFlow.pending;
        if (info == null) {
            return;
        }
        info.label = fields.label.primitiveValue;
        info.annotationData = fields.details.primitiveValue;
        info.mainColor = fields.mainColor.primitiveValue;
        info.badgeColor = fields.badgeColor.primitiveValue;
        chart.finishAnnotationFlow(info);
        UserAnnotationFlow.pending = null;
    }

    public static cancel(chart: IgcDataChartComponent): void {
        var info = UserAnnotationFlow.pending;
        if (info != null && info.annotationId != null) {
            chart.cancelAnnotationFlow(info.annotationId);
        }
        UserAnnotationFlow.pending = null;
    }
}
//end supportingTypes
