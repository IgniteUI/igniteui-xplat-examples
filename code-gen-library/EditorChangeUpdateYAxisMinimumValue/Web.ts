//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateYAxisMinimumValue {
    //begin eventHandler
    public editorChangeUpdateYAxisMinimumValue(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        
		var yAxisMinimumVal = args.newValue;
        this.chart.yAxisMinimumValue = parseInt(yAxisMinimumVal);      		
    }
    //end eventHandler
}