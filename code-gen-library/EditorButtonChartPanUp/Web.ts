//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonChartPanUp {
    //begin eventHandler
    public editorButtonChartPanUp(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        const window = chart.actualWindowRect;
        chart.windowRect = { left: window.left, top: window.top - 0.05, width: window.width, height: window.height };
    }
    //end eventHandler
}
