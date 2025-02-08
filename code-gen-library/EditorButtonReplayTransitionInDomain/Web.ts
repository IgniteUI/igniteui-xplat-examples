//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonReplayTransitionInDomain {
    //begin eventHandler
    public editorButtonReplayTransitionInDomain(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<any>("content");
        chart.replayTransitionIn();
    }
    //end eventHandler
}