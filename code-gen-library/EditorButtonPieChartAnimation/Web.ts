//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

// Declared by the PieChartAnimationUtility supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { PieChartAnimation } from '../PieChartAnimationUtility/Web';

export class EditorButtonPieChartAnimation {

    //begin eventHandler
    public editorButtonPieChartAnimation(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        PieChartAnimation.toggle();
    }
    //end eventHandler
}
