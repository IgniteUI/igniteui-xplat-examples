//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeUpdateYAxisMaximumValue {
    //begin eventHandler
    public editorChangeUpdateYAxisMaximumValue(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var yAxisMaximumVal = args.newValue!! as String;
        CodeGenHelper.getDescription<IgaCategoryChart>("content").yAxisMaximumValue = parseInt(yAxisMaximumVal);   
    }
    //end eventHandler
}