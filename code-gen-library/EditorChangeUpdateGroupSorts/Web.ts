//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateGroupSorts {
    //begin eventHandler
    public editorChangeUpdateGroupSorts(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
	
        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;      
    }
    //end eventHandler
}