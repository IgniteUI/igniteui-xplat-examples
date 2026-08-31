//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeReplayTransitionInDomain {
    //begin eventHandler
    public editorChangeReplayTransitionInDomain(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        // The editor has already written the new value onto the chart; replaying is what makes the
        // change visible, since a transition only shows while it is running.
        var chart = CodeGenHelper.getDescription<any>("content");
        chart.replayTransitionIn();
    }
    //end eventHandler
}
