//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateYAxisMaximumValue {
    //begin eventHandler
    public editorChangeUpdateYAxisMaximumValue(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        
        var yAxisMaximumVal = args.newValue;
        this.chart.yAxisMaximumValue = parseInt(yAxisMaximumVal);   
    }
    //end eventHandler
}