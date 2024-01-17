//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateInitialSummaries {
    //begin eventHandler
    public editorChangeUpdateInitialSummaries(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
	
        var intialSummaryVal = args.newValue.toString();
        this.chart.initialSummaries = intialSummaryVal;   
    }
    //end eventHandler
}