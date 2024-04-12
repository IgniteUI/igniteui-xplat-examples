//begin imports
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowSelectionConditional {
    //begin eventHandler
    public webHierarchicalGridRowSelectionConditional(eventArgs: CustomEvent<IgcRowSelectionEventArgs>): void {
        const event = eventArgs.detail;
        if (!event.added.length && event.removed.length) {
            // ignore de-select
            return;
        }
        var grid = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
        const originalAddedLength = event.added.length;

        // only allow selection of items that has grammy award
        event.newSelection = event.newSelection.filter((x: any) => x.HasGrammyAward);

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