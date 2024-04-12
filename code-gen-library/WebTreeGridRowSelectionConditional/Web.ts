//begin imports
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridRowSelectionConditional {
    //begin eventHandler
    public webTreeGridRowSelectionConditional(eventArgs: CustomEvent<IgcRowSelectionEventArgs>): void {
        const event = eventArgs.detail;
        if (!event.added.length && event.removed.length) {
            // ignore de-select
            return;
        }
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        const originalAddedLength = event.added.length;

        // only allow selection for employees that are not pn PTO
        event.newSelection = event.newSelection.filter(x => x.OnPTO === true);

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter((x: any) => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, de-select instead
                event.newSelection = [];
        }
    }
    //end eventHandler
}