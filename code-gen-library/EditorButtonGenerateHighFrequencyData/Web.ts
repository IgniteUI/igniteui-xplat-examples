//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class EditorButtonGenerateHighFrequencyData {

    //begin eventHandler
    public editorButtonGenerateHighFrequencyData(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        CategoryChartFrequency.generate(CodeGenHelper.getDescription<IgcCategoryChartComponent>("content"));
    }
    //end eventHandler
}
