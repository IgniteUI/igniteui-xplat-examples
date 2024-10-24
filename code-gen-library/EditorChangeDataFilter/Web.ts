//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeDataFilter {
    //begin eventHandler
    public editorChangeDataFilter(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        
        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        var filter = args.newValue.toString();
        chart.initialFilter = "(contains(Year," + "'" + filter + "'" + "))";
    }
    //end eventHandler
}