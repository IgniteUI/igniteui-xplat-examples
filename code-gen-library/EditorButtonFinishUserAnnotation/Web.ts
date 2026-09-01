//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the UserAnnotationFlowUtility supporting item, which this item requires.
import { UserAnnotationFlow, UserAnnotationFlowFields } from '../UserAnnotationFlowUtility/Web';

export class EditorButtonFinishUserAnnotation {

    //begin eventHandler
    public editorButtonFinishUserAnnotation(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var fields = new UserAnnotationFlowFields();
        fields.label = CodeGenHelper.findByName<any>("AnnotationLabel");
        fields.details = CodeGenHelper.findByName<any>("AnnotationDetails");
        fields.mainColor = CodeGenHelper.findByName<any>("AnnotationMainColor");
        fields.badgeColor = CodeGenHelper.findByName<any>("AnnotationBadgeColor");
        UserAnnotationFlow.finish(CodeGenHelper.getDescription<IgcDataChartComponent>("content"), fields);
    }
    //end eventHandler
}
