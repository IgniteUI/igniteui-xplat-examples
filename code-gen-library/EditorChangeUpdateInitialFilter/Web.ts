//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateInitialFilter {
    //begin eventHandler
    public editorChangeUpdateInitialFilter(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        
        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        var intialFilterVal = args.newValue.toString();
        chart.initialFilter = intialFilterVal;   
    }
    //end eventHandler
}