//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonReplayTransitionIn {
    //begin eventHandler
    public editorButtonReplayTransitionIn(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var series = CodeGenHelper.getDescription<IgcDataChartComponent>("content").actualSeries;
        for (var i = 0; i < series.length; i++) {
            series[i].replayTransitionIn();
        }
    }
    //end eventHandler
}