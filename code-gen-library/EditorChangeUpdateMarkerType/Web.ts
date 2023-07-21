//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateMarkerType {
    //begin eventHandler
    public editorChangeUpdateMarkerType(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgcPropertyEditorPropertyDescriptionComponent;
        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        
        var markerVal = item.primitiveValue;
        chart.markerTypes = markerVal;   
    }
    //end eventHandler
}