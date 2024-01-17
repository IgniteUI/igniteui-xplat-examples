//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateInitialGroups {
    //begin eventHandler
    public editorChangeUpdateInitialGroups(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        
        var intialGroupVal = args.newValue.toString();
        this.chart.initialGroups = intialGroupVal;   
    }
    //end eventHandler
}