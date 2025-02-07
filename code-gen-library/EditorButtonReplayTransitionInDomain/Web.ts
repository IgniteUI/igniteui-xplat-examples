//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDomainChart } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonReplayTransitionInDomain {
    //begin eventHandler
    public editorButtonReplayTransitionInDomain(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDomainChart>("content");
        chart.replayTransitionIn();
    }
    //end eventHandler
}