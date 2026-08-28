//begin imports
import { IgcDataChartComponent, IgcUserAnnotationInformation } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

//begin supportingTypes
// The annotation the reader is part-way through drawing. The chart hands it over when it wants the
// label and colours filled in, and will not draw it until one of the two buttons answers -- so the
// pending annotation has to outlive the request, and all three handlers have to be looking at the
// same one.
export class UserAnnotationFlow {

    private static pending: IgcUserAnnotationInformation | null = null;

    private static chart(): IgcDataChartComponent {
        return CodeGenHelper.getDescription<IgcDataChartComponent>("content");
    }

    private static field(name: string): any {
        return CodeGenHelper.getDescription<any>(name);
    }

    // Seeds the fields with whatever the annotation already carries, so an edit starts from what is
    // there rather than from the placeholder text.
    public static begin(info: IgcUserAnnotationInformation): void {
        UserAnnotationFlow.pending = info;
        UserAnnotationFlow.field("AnnotationLabel").primitiveValue = info.label == null ? "" : info.label;
        UserAnnotationFlow.field("AnnotationDetails").primitiveValue = info.annotationData == null ? "" : info.annotationData;
        UserAnnotationFlow.field("AnnotationMainColor").primitiveValue = info.mainColor == null ? "black" : info.mainColor;
        UserAnnotationFlow.field("AnnotationBadgeColor").primitiveValue = info.badgeColor == null ? "black" : info.badgeColor;
    }

    public static finish(): void {
        var info = UserAnnotationFlow.pending;
        if (info == null) {
            return;
        }
        info.label = UserAnnotationFlow.field("AnnotationLabel").primitiveValue;
        info.annotationData = UserAnnotationFlow.field("AnnotationDetails").primitiveValue;
        info.mainColor = UserAnnotationFlow.field("AnnotationMainColor").primitiveValue;
        info.badgeColor = UserAnnotationFlow.field("AnnotationBadgeColor").primitiveValue;
        UserAnnotationFlow.chart().finishAnnotationFlow(info);
        UserAnnotationFlow.pending = null;
    }

    public static cancel(): void {
        var info = UserAnnotationFlow.pending;
        if (info != null && info.annotationId != null) {
            UserAnnotationFlow.chart().cancelAnnotationFlow(info.annotationId);
        }
        UserAnnotationFlow.pending = null;
    }
}
//end supportingTypes
