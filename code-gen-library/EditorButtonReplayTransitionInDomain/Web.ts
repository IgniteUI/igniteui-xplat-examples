//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { XamDomainChart } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonReplayTransitionInDomain {
    //begin eventHandler
    public editorButtonReplayTransitionInDomain(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<XamDomainChart>("content");
        chart.replayTransitionIn();
    }
    //end eventHandler
}