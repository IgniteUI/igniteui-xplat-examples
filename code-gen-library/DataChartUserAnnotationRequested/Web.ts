//begin imports
import { IgcUserAnnotationInformationEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the UserAnnotationFlowUtility supporting item, which this item requires.
import { UserAnnotationFlow, UserAnnotationFlowFields } from '../UserAnnotationFlowUtility/Web';

export class DataChartUserAnnotationRequested {

    //begin eventHandler
    public dataChartUserAnnotationRequested(sender: any, args: IgcUserAnnotationInformationEventArgs): void {
        var fields = new UserAnnotationFlowFields();
        fields.label = CodeGenHelper.getDescription<any>("AnnotationLabel");
        fields.details = CodeGenHelper.getDescription<any>("AnnotationDetails");
        fields.mainColor = CodeGenHelper.getDescription<any>("AnnotationMainColor");
        fields.badgeColor = CodeGenHelper.getDescription<any>("AnnotationBadgeColor");
        UserAnnotationFlow.begin(args.annotationInfo, fields);
    }
    //end eventHandler
}
