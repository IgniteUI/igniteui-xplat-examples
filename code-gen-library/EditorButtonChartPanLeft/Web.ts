//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonChartPanLeft {
    //begin eventHandler
    public editorButtonChartPanLeft(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        chart.actualWindowPositionHorizontal -= 0.05;
    }
    //end eventHandler
}
