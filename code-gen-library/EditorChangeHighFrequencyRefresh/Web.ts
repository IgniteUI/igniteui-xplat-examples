//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class EditorChangeHighFrequencyRefresh {

    //begin eventHandler
    public editorChangeHighFrequencyRefresh(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        CategoryChartFrequency.refreshMilliseconds = Number(args.newValue);
        CategoryChartFrequency.restartTimer(CodeGenHelper.getDescription<IgcCategoryChartComponent>("content"));
    }
    //end eventHandler
}
