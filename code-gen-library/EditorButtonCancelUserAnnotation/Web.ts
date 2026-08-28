//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

// Declared by the UserAnnotationFlowUtility supporting item, which this item requires.
import { UserAnnotationFlow } from '../UserAnnotationFlowUtility/Web';

export class EditorButtonCancelUserAnnotation {

    //begin eventHandler
    public editorButtonCancelUserAnnotation(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        UserAnnotationFlow.cancel();
    }
    //end eventHandler
}
