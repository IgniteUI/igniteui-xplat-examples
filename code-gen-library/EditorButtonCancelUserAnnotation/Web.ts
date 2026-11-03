//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the UserAnnotationFlowUtility supporting item, which this item requires.
import { UserAnnotationFlow } from '../UserAnnotationFlowUtility/Web';

export class EditorButtonCancelUserAnnotation {

    //begin eventHandler
    public editorButtonCancelUserAnnotation(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        UserAnnotationFlow.cancel(CodeGenHelper.getDescription<IgcDataChartComponent>("content"));
    }
    //end eventHandler
}
