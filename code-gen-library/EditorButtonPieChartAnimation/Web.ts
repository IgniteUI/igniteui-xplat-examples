//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcPieChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the PieChartAnimationUtility supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { PieChartAnimation } from '../PieChartAnimationUtility/Web';

export class EditorButtonPieChartAnimation {

    //begin eventHandler
    public editorButtonPieChartAnimation(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        PieChartAnimation.toggle(CodeGenHelper.getDescription<IgcPieChartComponent>("content"));
    }
    //end eventHandler
}
