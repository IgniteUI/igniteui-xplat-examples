//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonChartPanRight {
    //begin eventHandler
    public editorButtonChartPanRight(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        const window = chart.actualWindowRect;
        chart.windowRect = { left: window.left + 0.05, top: window.top, width: window.width, height: window.height };
    }
    //end eventHandler
}
